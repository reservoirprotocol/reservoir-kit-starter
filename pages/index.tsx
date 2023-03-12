import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Support NFTEarth!</title>
        <meta name="description" content="Support NFTEarth" />
        <link rel="icon" href="https://i.imgur.com/BCH7hIb.png" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-4 px-4 gap-y-4 text-center">
        <h1 className="text-3xl font-bold">
          NFTs are the most important aspect of on-boarding the next 1 billion users to web3.
        </h1>
        <p className="text-gray-400">
          Support the NFT marketplace built for L2
        </p>
        <a
          href="https://discord.gg/nftearth"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 visited:text-purple-600"
        >
         Join us in Discord to learn more!
        </a>
        <ConnectButton />
      </main>
      {/* Fork me on Github banner */}
      <a
        href="https://nftearth.exchange"
        target="_blank"
        rel="noreferrer"
        className="absolute top-[50px] left-[-60px] -rotate-45 p-1 bg-green-700"
      >
        <div className="text-white px-8 py-1 border-b border-t border-dotted w-[250px] text-center">
         Visit NFTEarth Marketplace
        </div>
      </a>
    </div>
  );
};

export default Home;
