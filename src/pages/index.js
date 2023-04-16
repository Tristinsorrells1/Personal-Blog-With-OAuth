import Styles from '../styles/Home.module.css'
import Link from 'next/link';

import { signIn, signOut , useSession } from 'next-auth/react';

function Home() {
  const { data: session, status  } = useSession();

  return (
    <>
      <Link href={"/"}>
          <button>Home</button>
       </Link>
    
      {session && (
          <Link href={"/dashboard"}>
            <button>Dashboard</button>
          </Link>
      )}
      {!session && (
        <Link href={"/api/auth/signin"}>
          <button
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >Sign In</button>
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