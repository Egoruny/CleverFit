import React from "react"
import style from './style.module.css'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  } from '@ant-design/icons';
interface ChildProps {
    collapse: boolean;
    setCollapsed:React.Dispatch<React.SetStateAction<boolean>>
  }

const Switcher: React.FC<ChildProps> = ({ collapse, setCollapsed }) => {
  const switcherElement = collapse ? (
    <MenuUnfoldOutlined className={style.switcher} />
  ) : (
    <MenuFoldOutlined className={style.switcher} />
  );


  const screenWidth = window.innerWidth;
  let dataTestId = '';

  if (screenWidth <= 360) {
    dataTestId = 'sider-switch-mobile';
  } else {
    dataTestId = 'sider-switch';
  }

  const updatedSwitcherElement = React.cloneElement(switcherElement, {
    onClick: () => setCollapsed(!collapse),
    'data-test-id': dataTestId,
  });

  return <>{updatedSwitcherElement}</>;
};

export default Switcher