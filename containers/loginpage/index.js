import Head from "next/head";
import { useRouter } from "next/router";
import { authentication } from "../../lib/firebase-config";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const LoginPage = () => {
  const router = useRouter();

  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
    .then((res) => {
      console.log(res)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
    <Head>
        <title>Login</title>
    </Head>
      <main className="w-full flex">
        <section className="h-[100vh] flex flex-col items-center justify-center bg-primary text-[white] md:w-[50%] md:relative over:w-full over:absolute">
          <div className="space-y-[24px]">
            <span className="text-[40px] font-bold leading-10">
              <h1>See what</h1>
              <h1>It&apos;s Happening now</h1>
            </span>
            <h1 className="text-[20px] font-semibold">
              Sign In to Twitter Today
            </h1>
          </div>
          <img
          className="pt-[80px] pb-[60px]"
            src={"/images/banners/login_banner.svg"}
            alt=""
            width={490}
            height={490}
          />
          <p className="text-[14px]">© 2022 Twitter, Inc.</p>
        </section>
        <section className="h-[100vh] bg-[white]/[0.5] flex items-center justify-center md:w-[50%] md:relative over:w-full over:absolute">
          <button
            className="p-1 flex bg-[white] items-center border-[1px] space-x-2"
            onClick={signInWithTwitter}
          >
            <img
              src="/images/icons/twitter.svg"
              alt=""
              width={20}
              height={20}
            />
            <p>Sign In with Twitter</p>
          </button>
        </section>
      </main>
    </>
  );
};

export default LoginPage;
