import React from 'react'
import "./topbar.css"
import { NotificationsNone, Public, Settings } from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className ="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">
                        cliend
                    </span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Public />
                        <span className="topIconBadge">
                            2
                        </span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                <img src={process.env.PUBLIC_URL + "./profile.png"} alt="Profile" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
