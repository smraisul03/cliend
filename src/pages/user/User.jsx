import "./user.css"
import {ContactPhoneRounded, ContactMailRounded, PersonPinRounded, CheckCircleOutlineRounded,
        HistoryRounded}  from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <div className="userShowTopTitle">
                            <span className="userShowUserName">Janson, Breift</span>
                            <span className="userShowUserTitle">Student</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <div className="userShowInfo">
                            <span className="userShowTitle">Account Detail</span>
                        </div>
                        <div className="userShowInfo">
                            <ContactMailRounded className="userShowIcon" />
                            <span className="showUserInfoTitle">jabr13</span>
                        </div>
                        <div className="userShowInfo">
                            <ContactPhoneRounded className="userShowIcon" />
                            <span className="showUserInfoTitle">+1 555 555-5555</span>
                        </div>
                        <div className="userShowInfo">
                            <PersonPinRounded className="userShowIcon" />
                            <span className="showUserInfoTitle">United States | Remote</span>
                        </div>
                        <div className="userShowInfo">

                            <CheckCircleOutlineRounded className="userShowIcon" />
                            <span className="showUserInfoTitle">Active</span>
                        </div>
                        <div className="userShowInfo">
                            <HistoryRounded className="userShowIcon" />
                            <span className="showUserInfoTitle">Last Accessed 19:35:12 | Jun 30, 2021.</span>
                        </div>
                        
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit User</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <input type="text" placeholder="Username"  className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <input type="text"  placeholder="Full Name" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <input type="text" placeholder="Email"  className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <input type="text"  placeholder="Phone Number" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <input type="text" placeholder="Location" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                            <select className="newUserSelect" name="active" id="active" placeholder="Status">
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                                <option value="Deprecated">Deprecated</option>
                                <option value="Compromised">Compromised</option>
                             </select>
                            </div>   
                        </div> 
                        <div className="userUpdateRight">
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
        </div>
</div>
    )
}
