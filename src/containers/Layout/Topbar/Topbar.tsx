import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import Search from 'baseui/icon/search'
import Popover, { PLACEMENT } from "../../../components/Popover/Popover";
import Notification from "../../../components/Notification/Notification";
import { AuthContext } from "../../../context/auth";
import { COMMUNITY, PMS } from "../../../settings/constants";
import {
  NotificationIcon,
  AlertDotIcon,
  ArrowLeftRound,
} from "../../../components/AllSvgIcon";
import {
  TopbarWrapper,
  Logo,
  LogoImage,
  TopbarLeftSide,
  TopbarRightSide,
  ProfileImg,
  Image,
  AlertDot,
  NotificationIconWrapper,
  UserDropdowItem,
  NavLink,
  LogoutBtn,
  DrawerIcon,
  CloseButton,
  GreetingButton,
  DrawerWrapper,
} from "./Topbar.style";
import Logoimage from "../../../image/Logo.png";
import UserImage from "../../../image/user.jpg";
import { useDrawerDispatch } from "../../../context/DrawerContext";
import { MenuIcon } from "../../../components/AllSvgIcon";
import Drawer, { ANCHOR } from "../../../components/Drawer/Drawer";
import Sidebar from "../Sidebar/Sidebar";


import Input from '../../../components/Input/Input';

const data = [
  {
    title: "Successful sale",
    time: "5m",
    message: "Sale # 12345 has been made",
  },
];

const routes = [
  {
    text: "Dashboard",
    link: "/",
  },
  {
    text: "Community",
    link: COMMUNITY,
  },
  {
    text: "PMS",
    link: PMS,
  },
];

const Topbar = ({ refs }: any) => {
  const dispatch = useDrawerDispatch();
  const { signout } = React.useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = useCallback(
    () => dispatch({ type: "OPEN_DRAWER", drawerComponent: "PRODUCT_FORM" }),
    [dispatch]
  );

  return (
    <TopbarWrapper ref={refs}>
      <TopbarLeftSide>
        <Logo>
          <Link to="/">
            <LogoImage src={Logoimage} alt="" />
          </Link>
        </Logo>

        {routes
          ? routes.map((route) => (
            <NavLink
              to={route.link}
              exact={route.link}
              activeStyle={{
                color: "#161F6A",
              }}
              onClick={() => { }}
            >
              {route.text}
            </NavLink>
          ))
          : null}
      </TopbarLeftSide>

        <Input
          value={''}
          placeholder='Search someting... '
          onChange={() => { }}
          clearable
          style={{borderRadius:"10px"}}
        />

      <DrawerWrapper>
        <DrawerIcon onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon />
        </DrawerIcon>
        <Drawer
          isOpen={isDrawerOpen}
          anchor={ANCHOR.left}
          onClose={() => setIsDrawerOpen(false)}
          overrides={{
            Root: {
              style: {
                zIndex: "1",
              },
            },
            DrawerBody: {
              style: {
                marginRight: "0",
                marginLeft: "0",
                "@media only screen and (max-width: 767px)": {
                  marginLeft: "30px",
                },
              },
            },
            DrawerContainer: {
              style: {
                width: "270px",
                "@media only screen and (max-width: 767px)": {
                  width: "80%",
                },
              },
            },
            Close: {
              component: () => (
                <CloseButton onClick={() => setIsDrawerOpen(false)}>
                  <ArrowLeftRound />
                </CloseButton>
              ),
            },
          }}
        >
          <Sidebar onMenuItemClick={() => setIsDrawerOpen(false)} />
        </Drawer>
      </DrawerWrapper>

      <TopbarRightSide>
        <Popover
          content={({ close }) => <Notification data={data} onClear={close} />}
          accessibilityType={"tooltip"}
          placement={PLACEMENT.bottomRight}
          overrides={{
            Body: {
              style: {
                width: "330px",
                zIndex: 2,
              },
            },
            Inner: {
              style: {
                backgroundColor: "#ffffff",
              },
            },
          }}
        >
          <NotificationIconWrapper>
            <NotificationIcon />
            <AlertDot>
              <AlertDotIcon />
            </AlertDot>
          </NotificationIconWrapper>
        </Popover>

        <Popover
          content={({ close }) => (
            <UserDropdowItem>
              <NavLink to={""} exact={false} onClick={close}>
                Profile
              </NavLink>
              <NavLink to={""} exact={false} onClick={close}>
                Settings
              </NavLink>
              <LogoutBtn
                onClick={() => {
                  signout();
                  close();
                }}
              >
                Logout
              </LogoutBtn>
            </UserDropdowItem>
          )}
          accessibilityType={"tooltip"}
          placement={PLACEMENT.bottomRight}
          overrides={{
            Body: {
              style: () => ({
                width: "220px",
                zIndex: 2,
              }),
            },
            Inner: {
              style: {
                backgroundColor: "#ffffff",
              },
            },
          }}
        >
          <ProfileImg>
            <Image src={UserImage} alt="user" />
          </ProfileImg>
        </Popover>
        <GreetingButton style={{ backgroundColor: "rgb(209, 249, 245)" }}>Hi,Steven</GreetingButton>
      </TopbarRightSide>
    </TopbarWrapper>
  );
};

export default Topbar;
