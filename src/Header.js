import React,{useState} from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";

function Header() {
    const [inputSearch, setInputSearch] = useState(''); 
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="">
                    <img
                    className="header__logo"
                    src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
                    alt="none"
                />
                </Link>
            </div>

            <div className="header__input">
                <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text" />
                
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
            </div>

            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar alt="Potato" src="/static/images/avatar/1.jpg" />
            </div>
        </div>
    );
}

export default Header;
