import Sidebar from "./components/sidebar/Sidebar";
import Topbar from  "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import LaptopList from "./pages/laptopList/LaptopList";
import "./app.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




function App() {
  return (
    <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users/">
              <UserList />
            </Route>
          <Route path="/user/">
            <User />
          </Route>
          <Route path="/newUser/">
            <NewUser />
          </Route>
          <Route path="/LaptopList/">
            <LaptopList />
          </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
