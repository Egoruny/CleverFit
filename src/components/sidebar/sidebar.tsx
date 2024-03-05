import React, { useState } from 'react';
import style from './sidebar.module.css';
import { Layout } from 'antd';
const { Sider } = Layout;

import CastomTrigger from '@components/custom-trigger/custom-trigger';
import Switcher from '@components/switcher/switcher';
import NavigationMenu from '@components/navigation-menu/navigation-menu';
import MenuLogo from '@components/menu-logo/menu-logo';

const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(true);
    const screenWidth = window.innerWidth;
    return (
        <Sider
            collapsedWidth={64}
            width={screenWidth === 360 ? 106 : 208}
            trigger={<CastomTrigger />}
            collapsible
            collapsed={collapsed}
            theme={'light'}
            className={collapsed ? style.close_bar : style.open_navbar}
        >
            <Switcher collapse={collapsed} setCollapsed={setCollapsed} />
            <MenuLogo collapse={collapsed} />
            <NavigationMenu />
        </Sider>
    );
};

export default Sidebar;
