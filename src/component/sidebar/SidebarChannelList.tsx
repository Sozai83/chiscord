import React from "react";
import SidebarChannel from "./SidebarChannel";
import "./SidebarChannelList.scss";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { useAppSelector } from "../../app/hooks";
import useCollection from "../../hooks/useCollection";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase";

type Props = {
  setHideChannelListHandler: any;
};

const SidebarChannelList = (props: Props) => {
  const { setHideChannelListHandler } = props;
  const user = useAppSelector((state) => state.user.user);
  const { documents: channels } = useCollection("channels");
  const addChannel = async () => {
    let channelName: string | null = prompt("Add a channel");
    if (channelName) {
      await addDoc(collection(db, "channels"), {
        channelName: channelName,
      });
    }
  };

  return (
    <div className="sidebarRight">
      <div className="sidebarTop">
        <h3>Discord</h3>
        <ExpandMoreIcon />
      </div>
      {/* side bar channels */}
      <div className="sidebarChannels">
        <div className="sidebarChannelsHeader">
          <div className="sidebarHeader">
            <ExpandMoreIcon />
            <h4>Programming Channel</h4>
          </div>
          <AddIcon className="sidebarAddIcon" onClick={addChannel} />
        </div>

        <div className="sidebarChannelList">
          {channels.map((channel) => {
            return (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
                setHideChannelListHandler={setHideChannelListHandler}
              />
            );
          })}
        </div>

        <div className="sidebarFooter">
          <div className="sidebarAccount">
            <img src={user?.photo} alt="" onClick={() => auth.signOut()} />
            <div className="accountName">
              <h4>{user?.displayName}</h4>
              <span>#{user?.uid.substring(0, 4)}</span>
            </div>
          </div>
          <div className="sidebarVoice">
            <MicIcon />
            <HeadphonesIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarChannelList;
