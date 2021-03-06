import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom"
import './App.css';



// Pages
import BodyForm from "./pages/BodyForm/BodyForm"


// Components
import Header from "./components/Header"
import Footer from "./components/Footer"

// Action Forms
// Base
import ActionForm from "./pages/ActionForms/ActionForm"

// Children
import FillForm from "./pages/ActionForms/FillForm/FillForm"
import Payment from "./pages/ActionForms/Payment/Payment"
import Certificate from "./pages/ActionForms/Certificate/Certificate"


function App() {
  return (

    <div className="App">
      <Router>
        {/* Header */}
        <Header />
        

        <Switch>
          <Route path="/"  exact >
            <BodyForm children={<ActionForm children={<FillForm />} />} />
          </Route>
          <Route path="/payment"  exact >
            <BodyForm children={<ActionForm children={<Payment />} />} />
          </Route>
          <Route path="/certificate"  exact >
            <BodyForm children={<ActionForm children={<Certificate />} />} />
          </Route>
          <Redirect to="/" />
        </Switch>
        
        <Footer />
      </Router>
    </div>
 
  );
}

export default App;
