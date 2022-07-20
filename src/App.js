import Navbar from './Navbar';
import Home from './Home';
import Forum from './Forum';
import Createaccountstep1 from './Createaccountstep1';
import Createaccountstep2 from './Createaccountstep2';
import Createaccountstep3 from './Createaccountstep3';
import Accountcreatedmessage from './Accountcreatedmessage';
import Connection from './Connection'
import SilksongArticle from './SilksongArticle';
import Doom from './Doom';
import Cuphead from './Cuphead';
import F12022 from './F12022'
import CreateAccountSteps from './CreateAccountSteps';
import FAQ from './FAQ'
import './i18n'
import React, { FC, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";
import { AccountContext } from './Helper/Context';

function App() {

  const [accountUserName, setAccountUserName] = useState("Guest")

  return (
    <Router>
      <div className="App">
        <Suspense fallback={null}>
          <AccountContext.Provider value = {{accountUserName,setAccountUserName}}>
            <Navbar />
            <div className="background" style={{ height: "100vh" }}>
              <div className="paddingContent">
                <div className="content" style={{ padding: "0px" }}>
                  <Switch>
                    <Route exact path="/">
                      <Home />
                    </Route>
                    <Route path="/forum">
                      <Forum />
                    </Route>
                    <Route path="/creeruncompteetape=1">
                      <CreateAccountSteps />
                    </Route>
                    <Route path="/creeruncompteetape=1">
                      <Createaccountstep1 />
                    </Route>
                    <Route path="/creeruncompteetape=2">
                      <Createaccountstep2 />
                    </Route>
                    <Route path="/creeruncompteetape=3">
                      <Createaccountstep3 />
                    </Route>
                    <Route path="/accountcree">
                      <Accountcreatedmessage />
                    </Route>
                    <Route path="/connection">
                      <Connection />
                    </Route>
                    <Route path="/silksong">
                      <SilksongArticle />
                    </Route>
                    <Route path="/doom">
                      <Doom />
                    </Route>
                    <Route path="/cuphead">
                      <Cuphead />
                    </Route>
                    <Route path="/F12022">
                      <F12022 />
                    </Route>
                    <Route path="/FAQ">
                      <FAQ />
                    </Route>
                  </Switch>
                </div>
              </div>
            </div>
          </AccountContext.Provider>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
