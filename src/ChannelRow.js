import React from "react";
import "./ChannelRow.scss";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function ChannelRow({
    image,
    channel,
    subs,
    noOfVideos,
    verified,
    description,
}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image} />
            <div className="channelRow__text">
                <h4>
                    {channel} {verified && <CheckCircleIcon />}
                </h4>
                <p>
                    {subs} subscribers &bull; {noOfVideos} videos
                </p>

                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow;
