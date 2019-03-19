import React from "react";
// import { Container, } from "bloomer";
import Menu from "./Menu";

const MenuIndex = ({ menus, }) => (
  <div> 
    { menus.map( menu =>
      <Menu
        key={menu.id}
        {...menu}
      />
      )
    }
  </div>
)

export default MenuIndex;
