import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import { RkBidModal } from "../components/BidModal";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ReservoirKit Starter Project</title>
        <meta name="description" content="ReservoirKit Starter Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-4 px-4 gap-y-4 text-center">
        <h1 className="text-3xl font-bold">
          Start building with Reservoir Kit
        </h1>
        <p className="text-gray-400">
          NextJS (Typescript), ReservoirKit, RainbowKit, Wagmi, TailwindCSS
        </p>
        <a
          href="https://docs.reservoir.tools/docs/reservoirkit-ui"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 visited:text-purple-600"
        >
          Checkout our docs to learn more
        </a>
        <ConnectButton />
        <RkBidModal />
      </main>
    </div>
  );
};

export default Home;
