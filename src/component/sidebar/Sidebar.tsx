import React, { useEffect, useState } from "react";
import SidebarChannel from "./SidebarChannel";
import "./Sidebar.scss";
import { auth, db } from "../../firebase";
import { useAppSelector } from "../../app/hooks";
import useCollection from "./../../hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";
import SidebarChannelList from "./SidebarChannelList";
// import { collection, query } from "firebase/firestore/lite";

type Props = {
  hideChannelList: boolean;
  setHideChannelListHandler: any;
};

const Sidebar = (props: Props) => {
  const { hideChannelList, setHideChannelListHandler } = props;
  return (
    <div className="sidebar">
      {/* sidebarLeft */}
      <div className="sidebarLeft">
        <div className="serverIcon">
          <img src="discordIcon.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="logo192.png" alt="" />
        </div>
      </div>
      {/* sidebarRight */}
      <div className={`sidebarRight ${hideChannelList ? "hidden" : ""}`}>
        <SidebarChannelList
          setHideChannelListHandler={setHideChannelListHandler}
        />
      </div>
    </div>
  );
};

export default Sidebar;
