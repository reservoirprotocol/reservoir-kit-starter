import { ConnectButton } from "@rainbow-me/rainbowkit";
import { ConnectWalletButton } from "../components/buttons/ConnectWalletButton";
import CollectionSlider from "../components/slider/CollectionSlider"
import Link from 'next/link'
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

      <div className="bg-[url('/images/Background.png')]">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col min-h-screen p-4">
            <div className="flex justify-between mt-10 sm:px-14 items-center">
              <img src="https://i.imgur.com/BCH7hIb.png" width="55" height="55" />
              <ConnectWalletButton />
            </div>
            <div className="m-auto">
              <div className="text-center flex flex-col">
                <div className="flex items-center text-white justify-center">
                  <div className="w-[100px] h-px bg-gray-400"></div>
                  <div className="px-4 font-semibold text-2xl">NFTEarth</div>
                  <div className="w-[100px] h-px bg-gray-400"></div>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-[40px] md:leading-[70px] lg:leading-[90px] text-white mt-6">
                  NFTs are the most important <br/> aspect of on-boarding the next <br/> 1 billion users to web3.
                </h1>
                <p className="text-gray-400 text-md sm:text-xl mt-5">
                  Support the NFT marketplace built for L2
                </p>
                <div className="flex gap-5 justify-center mt-10">
                  <Link href="https://nftearth.exchange">
                    <button className="text-medium group-hover:text-xl text-[#FEFEFE] py-2 sm:px-8 sm:py-4 rounded bg-[#2D623F] transition ease-in-out hover:bg-opacity-[0.4] border border-[#2D623F] hover:border-[#6FE999] min-w-[150px] sm:min-w-[200px] text-sm sm:text-base">
                      Visit Marketplace
                    </button>
                  </Link>
                  <Link href="https://discord.gg/nftearth">
                    <button className="text-medium group-hover:text-xl text-[#FEFEFE] py-2 sm:px-8 sm:py-4 rounded bg-[#2D623F] transition ease-in-out hover:bg-opacity-[0.4] border border-[#2D623F] hover:border-[#6FE999] min-w-[150px] sm:min-w-[200px] text-sm sm:text-base">
                      Join Us on Discord
                    </button>
                  </Link>
                </div>
              </div>
              <div className="mt-20 overflow-hidden flex justify-center px-0 lg:px-0">
                <CollectionSlider />
              </div>
            </div>
          </div>
        
          {/* <a
            href="https://nftearth.exchange"
            target="_blank"
            rel="noreferrer"
            className="absolute top-[50px] left-[-60px] -rotate-45 p-1 bg-green-700"
          >
            <div className="text-white px-8 py-1 border-b border-t border-dotted w-[250px] text-center">
            Visit NFTEarth Marketplace
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
