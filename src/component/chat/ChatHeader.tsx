import React from "react";
import "./ChatHeader.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PushPinIcon from "@mui/icons-material/PushPin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  channelName: string | null;
  setHideChannelListHandler: any;
};

const ChatHeader = (props: Props) => {
  const { channelName, setHideChannelListHandler } = props;
  const openChatLists = () => {
    setHideChannelListHandler(false);
  };

  return (
    <div className="chatHeader">
      <div className="chatHeaderDesktop">
        <div className="chatHeaderLeft">
          <h3>
            <span className="chatHeaderHash">#</span>
            {channelName}
          </h3>
        </div>
        <div className="chatHeaderRight">
          <NotificationsIcon />
          <PushPinIcon />
          <PeopleAltIcon />
          <div className="chatHeaderSearch">
            <input type="text" placeholder="Search" />
            <SearchIcon />
          </div>
          <SendIcon />
          <HelpIcon />
        </div>
      </div>
      <div className="chatHeaderMobile">
        <div className="chatHeaderLeft">
          <MenuIcon onClick={openChatLists} />
          <h3>
            <span className="chatHeaderHash">#</span>
            {channelName}
          </h3>
        </div>
        <div className="chatHeaderRight">
          <SearchIcon />
          <PeopleAltIcon />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
