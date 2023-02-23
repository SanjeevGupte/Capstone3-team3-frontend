import { Switch, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Protected from "./pages/protected/Protected";
import Login from "./pages/login/Login";
import NotFound from "./pages/notFound/NotFound";
import Register from "./pages/register/Register";
import UpdateUser from "./pages/updateUser/UpdateUser";
import Agent from "./pages/agent/Agent";
import Quote from "./pages/quote/Quote";
import QuotesHome from "./pages/quotesHome/LandingPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/login"
          component={Login}
        />
        <Route
          exact
          path="/register"
          component={Register}
        />
        <Route
          exact
          path="/updateuser/:email"
          component={UpdateUser}
        />
        <Route
          exact
          path="/protected"
          component={Protected}
        />
        <Route
          exact
          path="/agent"
          component={Agent}
        />
        <Route
          exact
          path="/quote"
          component={Quote}
        />
        <Route
          exact
          path="/quotesHome"
          component={QuotesHome}
        />
        <Route
          exact
          path="/home"
          component={Home}
        />
        <Route
          exact
          path="*"
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

export default App;
