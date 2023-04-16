import Styles from '../styles/Home.module.css'
import Link from 'next/link';

import { signIn, signOut , useSession } from 'next-auth/react';

function Home() {
  const { data: session, status  } = useSession();

  return (
    <>
      {session && (
        <div>
          <h1>{`Welcome, ${session.user.name}`}</h1>
          <iframe
            alt="'Never Gonna Give You Up' music video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="YouTube video player"
          ></iframe>
        </div>
      )}
      {!session && <div>Welcome! Please Sign-in to Read my Blog</div>}
      {!session && (
        <Link href={"/api/auth/signin"}>
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign In
          </button>
        </Link>
      )}
      {session && (
        <Link href={"/api/auth/signout"}>
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            className={Styles.nav_button}
          >
            Sign Out
          </button>
        </Link>
      )}
    </>
  );
}

export default Home;