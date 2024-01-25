import {AccordionMenuContainer} from "./style";
import { IoStorefront } from "react-icons/io5";
import { TbReportMoney } from "react-icons/tb";
import {NavLink} from "react-router-dom";
import React from "react";
import {IoMdSettings} from "react-icons/io";

function AccordionMenu() {
  const MenuList = [
    {
      title: '매장 관리',
      icon: IoStorefront,
      address: '/store'
    },
    {
      title: '매출 관리',
      icon: TbReportMoney,
      address: '/sales'
    },
    {
      title: '마이페이지',
      icon: IoMdSettings,
      address: '/mypage'
    }
  ]

  return (
    <AccordionMenuContainer>
      {MenuList.map((menu, index) => (
        <div key={index}>
          <div className={"title"}>
            <NavLink to={menu.address} className={({isActive}) => (isActive ? "isActive" : "titleLink")}>
              {/*@ts-ignore*/}
              {menu.icon()}
              <p>{menu.title}</p>
            </NavLink>
          </div>
        </div>
      ))}
    </AccordionMenuContainer>
  );
}

export default AccordionMenu;