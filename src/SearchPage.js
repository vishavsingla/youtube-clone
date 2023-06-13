import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import "./SearchPage.scss";
import Image from "./channelLogo.png";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image={Image}
                channel="Program"
                verified
                subs="300k"
                noOfVideos={290}
                description="You can find programming related stuff here"
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="650k"
                description="Do you want a free programming course"
                timestamp="3 days ago"
                channel="Programmer"
                title="Become a web developer in 10 minutes | 2019/2020"
                channelImage={Image}
                image={Image}
            />

            <VideoRow
                views="1.4M"
                subs="650k"
                description="Do you want a free programming course"
                timestamp="3 days ago"
                channel="Programmer"
                title="Become a web developer in 10 minutes | 2019/2020"
                channelImage={Image}
                image={Image}
            />

            <VideoRow
                views="1.4M"
                subs="650k"
                description="Do you want a free programming course"
                timestamp="3 days ago"
                channel="Programmer"
                title="Become a web developer in 10 minutes | 2019/2020"
                channelImage={Image}
                image={Image}
            />

            <VideoRow
                views="1.4M"
                subs="650k"
                description="Do you want a free programming course"
                timestamp="3 days ago"
                channel="Programmer"
                title="Become a web developer in 10 minutes | 2019/2020"
                channelImage={Image}
                image={Image}
            />

            <VideoRow
                views="1.4M"
                subs="650k"
                description="Do you want a free programming course"
                timestamp="3 days ago"
                channel="Programmer"
                title="Become a web developer in 10 minutes | 2019/2020"
                channelImage={Image}
                image={Image}
            />
        </div>
    );
}

export default SearchPage;
