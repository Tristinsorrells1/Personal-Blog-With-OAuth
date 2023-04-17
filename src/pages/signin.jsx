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
    console.log(status)
    if (status === "authenticated") {
      push('/')
    }
  }, [session])

  

  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              onClick={(e) => {
                 e.preventDefault();
                 signIn(provider.id);
              }}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </>
  );
};


export default signin;

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       providers: await providers(context),
//     },
//   };
// }
