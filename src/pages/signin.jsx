import { providers, signIn, useSession, getProviders} from "next-auth/react";
import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation';

function signin() {
 const [providers, setProviders] = useState(null);
 const { data: session, status } = useSession();
 const { push } = useRouter();
 
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      push('/')
    }
  }, [session])

  return (
    <>
      <div className="header">
        <div className="author-info">
          <img src="/pic.png" className="selfie" alt="Picture of Tristin"></img>
          <p className="header-grey">by</p>
          <p className="header-main">Tristin Sorrells</p>
          <p className="header-grey">on</p>
          <p className="header-main"> April 17, 2023</p>
        </div>
      </div>
      <div className="OAuth-container">
        <p className="login-text">Login to Continue Reading</p>
        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
              className={"provider-btn"}
                onClick={(e) => {
                    e.preventDefault();
                    signIn(provider.id);
                }}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default signin;