import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

function Home() {
  const { data: session, status } = useSession();

  return (
    <section className="home-container">
      <div className="header">
        <div className="author-info">
          <img src="/pic.png" className="selfie" alt="Picture of Tristin"></img>
          <p className="header-grey">by</p>
          <p className="header-main">Tristin Sorrells</p>
          <p className="header-grey">on</p>
          <p className="header-main"> April 17, 2023</p>
        </div>
        {!session && (
          <Link href={"/api/auth/signin"}>
            <button
              className="sign-in-btn"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Sign-In
            </button>
          </Link>
        )}
        {session && (
          <Link href={"/api/auth/signout"}>
            <button
              className="sign-in-btn"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </button>
          </Link>
        )}
      </div>
      {!session && (
        <p className="article-title">
          Reflecting on Lessons Learned During a 7-month Intensive Software Engineering Program
        </p>
      )}
      {!session && (
        <p className="article-text">
          This October, I enrolled in the Turing School of Software and
          Designs's Front-End Engineering Program.
        </p>
      )}
      {!session && (
        <p className="article-text">
          With graduation rapidly approaching, I want to reflect on the valuable experiences I gained, the important lessons learned, and all the aha moments that made everything worth it. In this blog, I will walk you through my . . .
        </p>
      )}
      {!session && (
        <Link href={"/api/auth/signin"}>
          <div className="continue-reading-container">
            <button
              className="continue-reading-btn"
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
            >
              Continue Reading
            </button>
          </div>
        </Link>
      )}
      {session && (
        <div className="rick-rolled-container">
          <h1>{`You've been Rickrolled, ${
            session.user.name.split(" ")[0]
          }!`}</h1>
          <iframe
            alt="'Never Gonna Give You Up' music video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="YouTube video player"
          ></iframe>
          <p className="explaination-text">
            In all seriousness, one of the most valuable lessons I've learned is to
            keep things fun.
          </p>
          <p className="explaination-text">
            Creating this silly little fake blog was my way of learning
            NextAuth.js for client-side authentication in Next.js using Google
            as a built-in OAuth Provider.
          </p>
          <Link href={"https://terminal.turing.edu/profiles/1686"}>
            <button className="portfolio-btn">
              Check Out My Other Projects!
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Home;
