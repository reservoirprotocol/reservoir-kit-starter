import { ConnectButton } from '@rainbow-me/rainbowkit';

export const ConnectWalletButton = () => {
  return (
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== 'loading';
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus ||
              authenticationStatus === 'authenticated');

          return (
            <div
              {...(!ready && {
                'aria-hidden': true,
                'style': {
                  opacity: 0,
                  pointerEvents: 'none',
                  userSelect: 'none',
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <button onClick={openConnectModal} type="button" className='text-medium text-[#FEFEFE] py-2 sm:px-8 sm:py-3 rounded bg-[#2D623F] transition ease-in-out hover:bg-opacity-[0.4] border border-[#2D623F] hover:border-[#6FE999] min-w-[150px] sm:min-w-[200px]'>
                      Connect Wallet
                    </button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button" className='text-medium text-[#FEFEFE] py-2 sm:px-8 sm:py-3 rounded bg-[#2D623F] transition ease-in-out hover:bg-opacity-[0.4] border border-[#2D623F] hover:border-[#6FE999] min-w-[150px] sm:min-w-[200px]'>
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div style={{ display: 'flex', gap: 12 }}>
                    <button
                      onClick={openChainModal}
                      type="button"
                      className='flex items-center text-white'
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 20,
                            height: 20,
                            borderRadius: 999,
                            overflow: 'hidden',
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? 'Chain icon'}
                              src={chain.iconUrl}
                              style={{ width: 20, height: 20 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>

                    <button onClick={openAccountModal} type="button" className='text-white'>
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ''}
                    </button>
                  </div>
                );
                })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
  )
};