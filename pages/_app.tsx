import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import { RainbowKitProvider, getDefaultWallets } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, goerli } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { ReservoirKitProvider } from "@reservoir0x/reservoir-kit-ui";

const { chains, provider, webSocketProvider } = configureChains(
  [
    optimism,
    arbitrum,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "false" ? [goerli] : []),
  ],
  [
    alchemyProvider({
      // This is Alchemy's default API key.
      // You can get your own at https://dashboard.alchemyapi.io
      apiKey: "SZGF3X-GuiXsq75KGa8DZOtJiOuPkTdx",
    }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ReservoirKitProvider
      options={{
        chains: [
          {
            id: 10,
            baseApiUrl: "https://api-optimism.reservoir.tools/",
            default: true,
            apiKey: "a5ec23ef-b358-5faa-8ed6-eaf6924b9191", // Get started with an api key here: https://docs.reservoir.tools/reference/rate-limits
          },
        ],
        source: "nftearth.exchange",
      }}
    >
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider modalSize="compact" chains={chains}>
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </ReservoirKitProvider>
  );
}

export default MyApp;
