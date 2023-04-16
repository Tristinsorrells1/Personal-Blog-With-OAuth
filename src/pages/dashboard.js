import React from "react";
import Styles from "../styles/Home.module.css";
import Link from "next/link";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    console.log(status)
    if (status === "unauthenticated") router.push("/");
  }, [status]);

  if (status === "authenticated") {
    return (
      <div>
        <Link legacyBehavior href="/">
          <a className={Styles.nav_button}>Home</a>
        </Link>
        <div>
          <br />
          This is the dasboard
        </div>
      </div>
    );
  }
}
