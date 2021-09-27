import "./newuser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <input type="text" placeholder="Username" />
        </div>
        <div className="newUserItem">
          <input type="text" placeholder="Full Name" />
        </div>
        <div className="newUserItem">
          <input type="email" placeholder="Email" />
        </div>
        <div className="newUserItem">
          <input type="password" placeholder="Password" />
        </div>
        <div className="newUserItem">
          <input type="text" placeholder="Number" />
        </div>
        <div className="newUserItem">
          <input type="text" placeholder="Location" />
        </div>
        <div className="newUserItem">
          <select className="newUserSelect" name="active" id="active" placeholder="Status">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Deprecated">Deprecated</option>
            <option value="Compromised">Compromised</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}