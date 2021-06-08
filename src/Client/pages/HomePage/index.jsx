import Footer from "Client/components/Footer";
import Header from "Client/components/Header";
import Shop from "Client/views/Shop";
import Slider from "Client/components/Slider";
import React from "react";
import { Route, Switch } from "react-router";
import Checkout from "Client/views/Checkout";
import Login from "Client/components/Login/Login";
import Register from "Client/components/Register.jsx";
import BillDetail from "Client/components/BillDetail";
import ListBill from "Client/components/ListBill";

function HomePage() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home/shop" exact component={Shop} />
        <Route path="/home/bill-detail/:id" exact component={BillDetail} />
        <Route path="/home/listbill" exact component={ListBill} />
        <Route path="/home/login" exact component={Login} />
        <Route path="/home/register" exact component={Register} />
        <Route path="/home/checkout" exact component={Checkout} />
        <Route path="/" component={Slider} />
      </Switch>

      {/* <Slider /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
