import React from "react";
import "./RecommendedVideos.scss";
import VideoCard from "./VideoCard";
import channelImage from "./channelLogo.png";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />
                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />

                <VideoCard
                    title="Become a web developer in 10 minutes | 2019/2020"
                    views="2.3M views"
                    timestamp="3 days ago"
                    channelImage="./channelLogo.png"
                    image={channelImage}
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;
