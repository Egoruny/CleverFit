import React from 'react';
import style from './style.module.css';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

type ChildProps = {
    collapse: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};
const screenWidth = window.innerWidth;
const dataTestId = screenWidth <= 360 ? 'sider-switch-mobile' : 'sider-switch';

const Switcher: React.FC<ChildProps> = ({ collapse, setCollapsed }) => {
    {
        React.createElement(
            'div',
            {
                className: style.switcher,
                onClick: () => setCollapsed((collapse) => !collapse),
            },
            collapse ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />,
        );
    }

    return (
        <>
            <button
                className={style.Switch}
                onClick={() => setCollapsed((collapse) => !collapse)}
                type='button'
            >
                <div className={style.SwitchPolygon}>
                    {collapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
            </button>
        </>
    );
};

export default Switcher;
