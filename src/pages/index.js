import Styles from '../styles/Home.module.css'
import Link from 'next/link';

import { signIn, signOut ,  useSession } from 'next-auth/react';

function Home() {
  const { data: session, status  } = useSession();

  return (
    <ul
      className={`${Styles.nav_container} ${
        !session && status === "loading" ? Styles.loading : Styles.loaded
      }`}
    >
      <li className={Styles.list}>
        <Link legacyBehavior href="/">
          <a className={Styles.nav_button}>Home</a>
        </Link>
      </li>
      {session && (
        <li className={Styles.list}>
          <Link legacyBehavior href="/dashboard">
            <a className={Styles.nav_button}>Dashboard</a>
          </Link>
        </li>
      )}
      {!session && (
        <li className={Styles.list}>
          <Link legacyBehavior href="/api/auth/signin">
            <a
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
              className={Styles.nav_button}
            >
              Sign in
            </a>
          </Link>
        </li>
      )}

      {session && (
        <li className={Styles.list}>
          <Link legacyBehavior href="/api/auth/signout">
            <a
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              className={Styles.nav_button}
            >
              Sign Out
            </a>
          </Link>
        </li>
      )}
    </ul>
  );
}

export default Home;