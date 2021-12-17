import React from 'react';
import {
  useMemo,
  useCallback,
  useState,
  useContext,
  createContext,
  useEffect,
  ReactNode,
  FC,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onRegister, onGetUser } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Menu, Modal, Dropdown, Image, Input } from 'antd';
import { CloseOutlined } from "@ant-design/icons";
import { useWallet } from '@solana/wallet-adapter-react';
import { Notifications } from '../Notifications';
import useWindowDimensions from '../../utils/layout';
import { MenuOutlined, DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { HowToBuyModal } from '../HowToBuyModal';
import { HashQueryLink, Wallet } from '@oyster/common';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import {
  Cog,
  CurrentUserBadge,
  CurrentUserBadgeMobile,
} from '../CurrentUserBadge';
import { ConnectButton } from '@oyster/common';
import { useForm } from "react-hook-form";
import IUser from '../../redux/shared/IUser';

//////////////////// Init Store /////////////////////////////
import { useConnection, WhitelistedCreator, useStore } from '@oyster/common';
import { saveAdmin } from '../../actions/saveAdmin';
import { useHistory } from 'react-router-dom';
////////////////////////////////////////////////////////////

const getDefaultLinkActions = (connected: boolean) => {
  return [
    <HashQueryLink to={`/`} key={'explore'}>
      <Button className="app-btn">Explore</Button>
    </HashQueryLink>,
    <HashQueryLink to={`/artworks`} key={'artwork'}>
      <Button className="app-btn">{connected ? 'My Items' : 'Artwork'}</Button>
    </HashQueryLink>,
    <HashQueryLink to={`/artists`} key={'artists'}>
      <Button className="app-btn">Creators</Button>
    </HashQueryLink>,
  ];
};

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

const DefaultActions = ({ vertical = false }: { vertical?: boolean }) => {

  const registeredUser = useSelector((state: any) => state.auth);
  const { connected, publicKey } = useWallet();
  const { visible, setVisible } = useWalletModal();
  const { handleSubmit } = useForm<IUser>();

  const [showWallets, setShowWallets] = useState(false);
  const [registerModalVisible, setRegisterModalVisible] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [registered, setRegistered] = useState(false);

  const dispatch = useDispatch();

  const close = useCallback(() => {
    setVisible(false);
    setShowWallets(false);
  }, [setVisible, setShowWallets]);

  const registerCancel = () => {
    setRegisterModalVisible(false);
  }

  const pubkey = publicKey?.toBase58() || '';
  const { wallets, wallet: selected, select } = useWallet();

  const phatomWallet = useMemo(() => getPhantomWallet(), []);

  const connectWallet = () => {
    select(phatomWallet[0].name);
    close();
  };

  const openModal = () => {
    setRegisterModalVisible(true);
  };

  const closeModal = () => {
    setRegisterModalVisible(false);
  };

  const handledRegister = (data: IUser) => {
    if (userEmail == '') {
      alert('Please type your email.');
    } else if (userName == '') {
      alert('Please type your username.');
    } else {
      data.email = userEmail;
      data.username = userName;
      data.address = pubkey;
      console.log('data: ', data.email, data.username, data.address);
      dispatch(
        onRegister(data)
      );
      setRegisterModalVisible(false);
    }
  };

  useEffect(() => {
    if (pubkey) {
      console.log("publickey => ", pubkey);
      dispatch(
        onGetUser({ address: pubkey })
        )
      }
  }, [pubkey])

  useEffect(() => {
    if (registeredUser.user.user) {
      setRegistered(true);
    }
  }, [registeredUser])
  
  const { wallet, connect } = useWallet();
  
  const handleClick = useCallback(
    () => (wallet ? connect().catch(() => {}) : open()),
    [wallet, connect, open],
  );
      
  ///////////////////////// Init Store //////////////////////////////////////////
  const [storeAddress, setStoreAddress] = useState<string | undefined>();
  const myWallet = useWallet();
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_STORE_OWNER_ADDRESS) {
      const getStore = async () => {
        if (myWallet.publicKey) {
          const store = await setStoreForOwner(myWallet.publicKey.toBase58());
          setStoreAddress(store);
        } else {
          setStoreAddress(undefined);
        }
      };
      getStore();
    }
  }, [myWallet.publicKey]);
  const [isInitalizingStore, setIsInitalizingStore] = useState(false);
  const connection = useConnection();
  const { setStoreForOwner } = useStore();
  const history = useHistory();

  const initializeStore = async () => {
    
    if (!myWallet.publicKey) {
      return;
    }
    
    setIsInitalizingStore(true);
    
    await saveAdmin(connection, myWallet, false, [
      new WhitelistedCreator({
        address: myWallet.publicKey.toBase58(),
        activated: true,
      }),
    ]);
    
    // TODO: process errors
    
    await setStoreForOwner(undefined);
    await setStoreForOwner(myWallet.publicKey.toBase58(),);
    
    history.push(`/admin/${location.hash?.slice(2)}`);
  };
  ////////////////////////////////////////////////////////////////////////////////
  
  // const menu = (
  //   <Menu>
  //     <Menu.Item>
  //       <Link to={`/profile`}>
  //         <UserOutlined />View Profile
  //       </Link>
  //     </Menu.Item>
  // <Menu.Item style={{borderBottom: "1px solid #000"}}>
  //       <Link to={`/create`}>
  //         Create
  //       </Link>
  //     </Menu.Item>
  //     <Menu.Item danger><LogoutOutlined />Sign out</Menu.Item>
  //   </Menu>
  // );
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        width: '100%',
        justifyContent: 'end'
      }}
    >
      <Link to={`/`}>
        <Button className="app-btn header-btn">Explore</Button>
      </Link>
      <Link to={`/collections`}>
        <Button className="app-btn header-btn">Collectibles</Button>
      </Link>
      <Link to={`/market`}>
        <Button className="app-btn header-btn">Art</Button>
      </Link>
      
      {/* <Link to={`/profile`}>
        <Button className="app-btn header-btn">Submit Profile</Button>
      </Link> */}
      {/* <Link to={`/art/create`}>
        <Button className="app-btn header-btn">Create</Button>
      </Link> */}
      {pubkey && (
      <>
        {registered ? (
          // <Link to="">
          //     <Dropdown overlay={menu}>
          //       <Button className="app-btn header-btn ant-dropdown-link" onClick={e => e.preventDefault()}>
          //         {pubkey} <DownOutlined />
          //       </Button>
          //     </Dropdown>
          // </Link>
          <Link to={`/profile`}>
            <Button className="app-btn header-btn">Submit Profile</Button>
          </Link>
        ) : (
          <Link to={``}>
            <Button className="app-btn header-btn" onClick={openModal}>
              Sign Up
            </Button>
          </Link>
        )}
      </>
      )}
      <Button
        className="app-btn"
        type="primary"
        loading={isInitalizingStore}
        onClick={initializeStore}
        style={{
          color: '#000',
          background: 'transparent',
          marginTop: '10px',
          paddingRight: '0px',
          display: 'none',
        }}
      >
        Init Store
      </Button>
      {/* {pubkey ? (
        <Link to="">
            <Dropdown overlay={menu}>
              <Button className="app-btn header-btn ant-dropdown-link" style={{maxWidth: ''}} onClick={e => e.preventDefault()}>
                {pubkey} <DownOutlined />
              </Button>
            </Dropdown>
        </Link>
      ) : (
        <Link to={''}>
          <Button className="app-btn header-btn" onClick={handleClick}>
            Connect to Wallet
          </Button>
        </Link>
      )} */}
      {connected ? (
        <>
        <CurrentUserBadge
          showBalance={false}
          showAddress={true}
        />
        <Notifications />
        <Cog />
        </>
      ) : (
        <ConnectButton
          type="text"
          size="large"
          className="app-btn btn-connect-wallet"
          style={{}}
          allowWalletChange
        />
      )}
      <Modal visible={registerModalVisible} onCancel={registerCancel}>
        <div className="registerHead">
          <h1>naraa</h1>
          <Button onClick={registerCancel}><CloseOutlined /></Button>
        </div>
        <div>
          <h3>Email Address</h3>
          <Input
            type="email"
            className="subscribe"
            style={{ backgroundColor: '#F8F8F8', border: 'none' }}
            value={userEmail}
            onChange={e => setUserEmail(e.target.value)}
          />
        </div>
        <p style={{ color: '#616368' }}>
          Your email address will be used for sending trade offers and email
          notifications.
        </p>
        <p>Your email address won’t be shared with any third party.</p>
        <div style={{ marginTop: '30px' }}>
          <h3>Username</h3>
          <Input
            type="name"
            className="subscribe"
            style={{ backgroundColor: '#F8F8F8', border: 'none' }}
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
        </div>
        <div style={{ marginTop: '30px' }}>
          <Button className="register-btn" onClick={handleSubmit(handledRegister)}>
            Register
          </Button>
        </div>
        <p style={{ color: '#616368', marginBottom: '30px' }}>
          <i style={{ fontSize: '14px', marginRight: '3px' }} className="fa">
            &#xf05a;
          </i>
          Solana Ledger doesn’t support message signing
        </p>
      </Modal>
    </div>
  );
};

const MetaplexMenu = () => {
  const { width } = useWindowDimensions();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const { connected } = useWallet();

  if (width < 768)
    return (
      <>
        <Dropdown
          arrow
          placement="bottomLeft"
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item>
                <Link to={`/`}>
                  <Button className="app-btn">Explore</Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={`/artworks`}>
                  <Button className="app-btn">
                    {connected ? 'My Items' : 'Artworks'}
                  </Button>
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link to={`/artists`}>
                  <Button className="app-btn">Creators</Button>
                </Link>
              </Menu.Item>
            </Menu>
          }
        >
          <MenuOutlined style={{ fontSize: '1.4rem' }} />
        </Dropdown>
      </>
    );

  return <DefaultActions />;
};

export const LogoLink = () => {
  return (
    <Link to={`/`}>
      <img src={'/metaplex-logo.svg'} />
    </Link>
  );
};

export const AppBar = () => {
  const { connected } = useWallet();
  return (
    <>
      <Row className="header">
        <Col lg={8}>
          <div className="app-left app-bar-box">
            <Link to={`/`}>
              <Image src="./logo.png" preview={false} />
            </Link>
          </div>
        </Col>
        <Col lg={16}>
          <div className="app-right app-bar-box">
            <DefaultActions />
          </div>
        </Col>
      </Row>
    </>
  );
};
