import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const HomePage = () => {
  const router = useRouter();
  const [check, setCheck] = useState(false);

  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>
      <main className="h-[100vh] bg-primary">
        <section className="w-full h-full flex flex-col items-center justify-center space-y-4">
          <div className="space-x-2">
            <button
              className="py-2 px-4 border-[1px] bg-[white]"
              onClick={() => setCheck(true)}
            >
              Check
            </button>
            <button
              className="py-2 px-4 border-[1px] bg-[white]"
              onClick={() => router.push("/")}
            >
              Back
            </button>
          </div>
          {check && <h1 className="text-[white]">Berhasil Login</h1>}
        </section>
      </main>
    </>
  );
};

export default HomePage;
