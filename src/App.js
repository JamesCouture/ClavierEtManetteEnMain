import Navbar from './Navbar';
import Home from './Home';
import Forum from './Forum';
import Createaccountstep1 from './Createaccountstep1';
import Createaccountstep2 from './Createaccountstep2';
import Createaccountstep3 from './Createaccountstep3';
import Accountcreatedmessage from './Accountcreatedmessage';
import Connection from './Connection'
import SilksongArticle from './SilksongArticle';
import CreateAccountSteps from './CreateAccountSteps';
import FAQ from './FAQ'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="background" style={{ height: "100vh" }}>
          <div className="paddingContent">
            <div className="content" style={{padding:"0px"}}>
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
                <Route path="/FAQ">
                  <FAQ />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
