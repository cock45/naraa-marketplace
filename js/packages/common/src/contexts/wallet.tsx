import { WalletAdapter, WalletError } from '@solana/wallet-adapter-base';
import {
  useWallet,
  WalletProvider as BaseWalletProvider,
} from '@solana/wallet-adapter-react';
import {
  getLedgerWallet,
  getSolongWallet,
  getMathWallet,
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getTorusWallet,
  WalletName,
} from '@solana/wallet-adapter-wallets';
import { Button, Collapse } from 'antd';
import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { notify } from '../utils';
import { MetaplexModal } from '../components';
import { Image } from 'antd';

const { Panel } = Collapse;

export interface WalletModalContextState {
  visible: boolean;
  setVisible: (open: boolean) => void;
}

export const WalletModalContext = createContext<WalletModalContextState>(
  {} as WalletModalContextState,
);

export function useWalletModal(): WalletModalContextState {
  return useContext(WalletModalContext);
}

export const WalletModal: FC = () => {
  const { wallets, wallet: selected, select } = useWallet();
  const { visible, setVisible } = useWalletModal();
  const [showWallets, setShowWallets] = useState(false);
  const close = useCallback(() => {
    setVisible(false);
    setShowWallets(false);
  }, [setVisible, setShowWallets]);

  const phatomWallet = useMemo(() => getPhantomWallet(), []);
  const solletWallet = useMemo(() => getSolletWallet(), []);
  const solflareWallet = useMemo(() => getSolflareWallet(), []);

  return (
    // <MetaplexModal title="Connect to Wallet" visible={visible} onCancel={close} className="modal-connect-wallet">
    <MetaplexModal title="" visible={visible} onCancel={close} className="modal-connect-wallet">
      {/* <span
        style={{
          color: 'rgba(255, 255, 255, 0.75)',
          fontSize: '14px',
          lineHeight: '14px',
          fontFamily: 'GraphikWeb',
          letterSpacing: '0.02em',
          marginBottom: 14,
        }}
      >
        RECOMMENDED
      </span> */}
      <div className="wallet-header">
        <Image src="./wallet/wallet-logo.png" preview={false}/>
        <h2 className='font-black'>Connect Wallet</h2>
      </div>
      <Button
        className="metaplex-button"
        onClick={() => {
          console.log("wallet Name => ", phatomWallet.name);
          select(phatomWallet.name);
          close();
        }}
        style={{background: '#FFF !important'}}
      >
        Phantom
        &nbsp;<img src={phatomWallet?.icon} style={{ width: '1.8rem' }} />
      </Button>
      <Button
        className="metaplex-button"
        onClick={() => {
          select(solletWallet.name);
          close();
        }}
        style={{background: '#FFF !important'}}
      >
        Sollet
        &nbsp;<img src='./wallet/Sollet.png' style={{ width: '1.8rem' }} />
      </Button>
      <Button
        className="metaplex-button"
        onClick={() => {
          select(solflareWallet.name);
          close();
        }}
        style={{background: '#FFF !important'}}
      >
        Solflare
        &nbsp;<img src={solflareWallet?.icon} style={{ width: '1.8rem' }} />
      </Button>
      <Collapse
        ghost
        expandIcon={panelProps =>
          panelProps.isActive ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 7.5L10 12.5L5 7.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
        }
      >
        <Panel
          header={
            <span
              style={{
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '16px',
                letterSpacing: '-0.01em',
                color: '#000',
              }}
            >
              Other Wallets
            </span>
          }
          key="1"
        >
          {wallets.map((wallet, idx) => {
            if (wallet.name === 'Phantom' || wallet.name === 'Sollet' || wallet.name === 'Solflare') return null;

            return (
              <Button
                key={idx}
                className="metaplex-button w100"
                style={{
                  marginBottom: 5,
                }}
                onClick={() => {
                  select(wallet.name);
                  close();
                }}
              >
                {wallet.name}
                &nbsp;<img src={'./wallet/'+wallet.name+'.png'} style={{ width: '1.8rem' }} />
              </Button>
            );
          })}
        </Panel>
      </Collapse>
    </MetaplexModal>
  );
};

export const WalletModalProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { publicKey } = useWallet();
  const [connected, setConnected] = useState(!!publicKey);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (publicKey) {
      const base58 = publicKey.toBase58();
      const keyToDisplay =
        base58.length > 20
          ? `${base58.substring(0, 7)}.....${base58.substring(
              base58.length - 7,
              base58.length,
            )}`
          : base58;

      notify({
        message: 'Wallet update',
        description: 'Connected to wallet ' + keyToDisplay,
      });
    }
  }, [publicKey]);

  useEffect(() => {
    if (!publicKey && connected) {
      notify({
        message: 'Wallet update',
        description: 'Disconnected from wallet',
      });
    }
    setConnected(!!publicKey);
  }, [publicKey, connected, setConnected]);

  return (
    <WalletModalContext.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      {children}
      <WalletModal />
    </WalletModalContext.Provider>
  );
};

export const WalletProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      // getTorusWallet({
      //   options: {
      //     // @FIXME: this should be changed for Metaplex, and by each Metaplex storefront
      //     clientId:
      //       'BOM5Cl7PXgE9Ylq1Z1tqzhpydY0RVr8k90QQ85N7AKI5QGSrr9iDC-3rvmy0K_hF0JfpLMiXoDhta68JwcxS1LQ',
      //   },
      // }),
      getLedgerWallet(),
      getSolongWallet(),
      getMathWallet(),
      getSolletWallet(),
    ],
    [],
  );

  const onError = useCallback((error: WalletError) => {
    console.error(error);
    notify({
      message: 'Wallet error',
      description: error.message,
    });
  }, []);

  return (
    <BaseWalletProvider wallets={wallets} onError={onError} autoConnect>
      <WalletModalProvider>{children}</WalletModalProvider>
    </BaseWalletProvider>
  );
};

export type WalletSigner = Pick<
  WalletAdapter,
  'publicKey' | 'signTransaction' | 'signAllTransactions'
>;
