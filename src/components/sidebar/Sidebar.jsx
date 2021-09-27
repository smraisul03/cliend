import "./sidebar.css"
import { 
    DashboardRounded, BugReportRounded, PieChartRounded,VpnLockRounded, MailRounded, 
     MessageRounded, AccountCircleRounded, NetworkCheckRounded,
    DesktopWindowsRounded, PhoneRounded, LaptopRounded, SupervisedUserCircleRounded
} from "@material-ui/icons"
import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="Link">
                            <li className="sidebarListItem active" >
                                <DashboardRounded className="sidebarIcon"/>
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <PieChartRounded className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <MessageRounded className="sidebarIcon"/>
                            Message
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Help Desk</h3>
                    <ul className="sidebarList">
                         <li className="sidebarListItem">
                            <BugReportRounded className="sidebarIcon"/>
                            Tickets
                        </li>
                        <li className="sidebarListItem">
                            <PhoneRounded className="sidebarIcon"/>
                            Phone
                        </li>
                        <Link to="/laptopList" className="Link">
                            <li className="sidebarListItem">
                                <LaptopRounded className="sidebarIcon"/>
                                Rentals
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MailRounded className="sidebarIcon"/>
                            Mail
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">User Management</h3>
                    <ul className="sidebarList">
                        <Link to="/newUser" className="Link">
                            <li className="sidebarListItem">
                                <AccountCircleRounded className="sidebarIcon"/>
                                Create Account
                            </li>
                        </Link>

                        <Link to="/users" className="Link">
                            <li className="sidebarListItem ">
                                <SupervisedUserCircleRounded className="sidebarIcon"/>
                                Directory
                            </li>
                        </Link>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Security</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <NetworkCheckRounded className="sidebarIcon"/>
                            Network
                        </li>
                        <li className="sidebarListItem">
                            <VpnLockRounded className="sidebarIcon"/>
                            Virtual Private Network
                        </li>
                        <li className="sidebarListItem">
                            <DesktopWindowsRounded className="sidebarIcon"/>
                            Virtual Machine
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )  
}
