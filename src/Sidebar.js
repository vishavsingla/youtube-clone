import React from 'react'
import "./Sidebar.scss";
import SidebarRow from './SidebarRow';
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow selected Icon={HomeIcon}title="Home"/>
        <SidebarRow Icon={WhatshotIcon} title="Trending"/>
        <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions"/>
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="Library" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={OndemandVideoIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
      <SidebarRow Icon={QueuePlayNextIcon} title="Your Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="Show More" />
      <hr />
    </div>
  )
}

export default Sidebar;