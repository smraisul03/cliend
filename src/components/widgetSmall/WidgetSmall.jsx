import "./widgetsmall.css"
import {VisibilityRounded, VisibilityOffRounded} from "@material-ui/icons"

export default function WidgetLarge() {
    return (
        <div class="widgetSmall">
            <span className="widgetSmallTitle">Active Helpdesk</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 01</span>
                        <span className="widgetSmallUserTitle">IT Department</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityOffRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 02</span>
                        <span className="widgetSmallUserTitle">Library</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 03</span>
                        <span className="widgetSmallUserTitle">Library</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 04</span>
                        <span className="widgetSmallUserTitle">Office</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityOffRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 05</span>
                        <span className="widgetSmallUserTitle">Remote</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 06</span>
                        <span className="widgetSmallUserTitle">Remote</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityOffRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
                <li className="widgetSmallListItems">
                    <img src={process.env.PUBLIC_URL + "./profile.png"} alt="User Profile" class="smallWidgetUserProfile"/>
                    <div class="widgetSmallUsers">
                        <span className="widgetSmallUsername">Helpdesk 07</span>
                        <span className="widgetSmallUserTitle">Remote</span>
                    </div>
                    <button className="widgetSmallButtons">
                        <VisibilityRounded className="widgetSmallIcons" />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
