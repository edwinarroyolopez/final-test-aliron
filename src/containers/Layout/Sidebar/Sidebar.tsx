import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import {
  SidebarWrapper,
  NavLink,
  MenuWrapper,
  Svg,
  LogoutBtn,
} from "./Sidebar.style";
import {
  OVERVIEW,
  WEBSITE,
  OTA_RANK,
  SALES,
} from "../../../settings/constants";
import { AuthContext } from "../../../context/auth";
import {
  SiteSettings,
  DashboardIcon,
  DeliveryIcon,
  SettingIcon,
  OrderIcon,
  LogoutIcon,
} from "../../../components/AllSvgIcon";

const sidebarMenus = [
  {
    name: "Overview",
    path: OVERVIEW,
    exact: true,
    icon: <DashboardIcon />,
  },
  {
    name: "Website",
    path: WEBSITE,
    exact: false,
    icon: <SettingIcon />,
  },
  {
    name: "OTA Rank",
    path: OTA_RANK,
    exact: false,
    icon: <SiteSettings />,
  },
  {
    name: "Sales",
    path: SALES,
    exact: false,
    icon: <OrderIcon />,
  },
];

export default withRouter(function Sidebar({
  refs,
  style,
  onMenuItemClick,
}: any) {
  const { signout } = useContext(AuthContext);
  return (
    <SidebarWrapper ref={refs} style={style}>
      <MenuWrapper>
        {sidebarMenus.map((menu: any, index: number) => (
          <NavLink
            to={menu.path}
            key={index}
            exact={menu.exact}
            activeStyle={{
              color: "#161F6A",
            }}
            onClick={onMenuItemClick}
          >
            {menu.icon ? <Svg>{menu.icon}</Svg> : ""}
            {menu.name}
          </NavLink>
        ))}
      </MenuWrapper>

      <LogoutBtn
        onClick={() => {
          signout();
        }}
      >
        <Svg>
          <SettingIcon />
        </Svg>
        Soporte
      </LogoutBtn>
    </SidebarWrapper>
  );
});
