import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Account from "./Pages/Account/Account";
import ItemDetail from "./Pages/ItemDetail/ItemDetail";
import ItemList from "./Pages/ItemList/ItemList";
import Payment from "./Pages/Payment/Payment";
import Mypage from "./Pages/Mypage/Mypage";
import Main from "./Pages/Main/Main";
import Portfolio from "./Pages/Mypage/Portfolio";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/itemlist" component={ItemList} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/itemdetail" component={ItemDetail} />
          <Route exact path="/order/:id" component={Payment} />
          <Route exact path="/product/detail/:id" component={ItemDetail} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
