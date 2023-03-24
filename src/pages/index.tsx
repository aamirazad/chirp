import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {

  const user = useUser();

  const { data } = api.posts.getAll.useQuery();
 
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
      <div className="bg-red-200">
        <div className="">
          {!user.isSignedIn && <SignInButton />}
          {!!user.isSignedIn && <SignOutButton />}
        </div>
        <div>
          {data?.map((post) => (
          <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </div>
      </main>
    </>
  );
};

export default Home;
