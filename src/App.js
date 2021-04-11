import {BrowserRouter as Router, Switch, Route,Redirect, Link} from "react-router-dom"
import './App.css';

// Pages
import BodyForm from "./pages/BodyForm/BodyForm"

// Footer
import Impressum from "./pages/FooterLinks/Impressum"
import TermsAndConditions from "./pages/FooterLinks/TermsAndConditions"
import DataProtection from "./pages/FooterLinks/DataProtection"

// Header
import Pricing from "./pages/HeaderLinks/Pricing"
import UseCases from "./pages/HeaderLinks/UseCases"
import HowItWorks from "./pages/HeaderLinks/HowItWorks"
import VerifyAFiling from "./pages/HeaderLinks/VerifyAFiling"

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

// Admin
import Administration from "./pages/Administration/Administration"
import AdminSettings from "./pages/Administration/settings/AdminSettings"

// Placeholder
import ImageUploader from "./components/imageuploader/ImageUploader"

import BG from "./images/Background.png"

function App() {
  return (

    <div className="App">

      <Router>
        {/* Header */}
        <Header />
        
        <Switch>
          <Route path="/"  exact >
            <BodyForm childrenLeft={<ActionForm children={<FillForm />} />} childrenRight={<WelcomeText />} />
          </Route>
          <Route path="/payment"  exact >
            <BodyForm childrenLeft={<ActionForm children={<Payment />} />} childrenRight={<WelcomeText />}/>
          </Route>
          <Route path="/certificate"  exact >
            <BodyForm childrenLeft={<ActionForm children={<Certificate />} />} childrenRight={<WelcomeText />}/>
          </Route>
          <Route path="/impressum" exact>
            <BodyForm childrenLeft={<ActionForm children={<FillForm />} />}  childrenRight={<Impressum />} />
          </Route>
          <Route path="/termsandconditions" exact>
            <BodyForm  childrenRight={<DataProtection privacy={false}  />} />
          </Route>
          <Route path="/dataprotection" exact>
            <BodyForm  childrenRight={<DataProtection privacy={true} />} />
          </Route>
          <Route path="/pricing" exact>
            <BodyForm childrenLeft={<ActionForm children={<FillForm />} />}  childrenRight={<Pricing />} />
          </Route>
          <Route path="/usecases" exact>
            <BodyForm childrenLeft={<ActionForm children={<FillForm />} />}  childrenRight={<UseCases />} />
          </Route>
          <Route path="/how" exact>
            <BodyForm childrenLeft={<ActionForm children={<FillForm />} />}  childrenRight={<HowItWorks />} />
          </Route>
          <Route path="/verify" exact>
            <BodyForm childrenLeft={<ActionForm children={<FillForm />} />} childrenRight={<VerifyAFiling />} />
          </Route>
          <Route path="/admin" exact >
            <Administration />
          </Route>
          <Route path="/admin/settings" exact>
            <AdminSettings />
          </Route>
          <Redirect to="/" />
        </Switch>
        
        <Footer />
      </Router>
    </div>
 
  );
}

export default App;


const WelcomeText = () => {
  return(
      <div className="welcomeTextContainer" >
          <div >
            <span style={{fontWeight:"bolder"}} >YOUR IDEAS </span>
            <span>ARE </span>
            <span style={{fontWeight:"bolder"}} >YOURS</span>
            <span>.</span></div>
          <div  ><span>PROTECT THEM.</span></div>
          <br/>
          <p>It was never so easy to steal ideas off the web</p>
          <p>It was never so easy to protect your ideas through the web.</p>
          <p>Protect your copyright and start profiting from your ideas</p>
          <h2>No Subscription - No Registration - Just Pay As You Go</h2>
          <div className="welcomeTextContainer__buttonGroup" >
              <Link style={{fontFamily:"Architects Daughter, cursive",fontSize:"1.5rem"}} to="/how" >HOW IT WORKS</Link>
              <Link style={{fontFamily:"Architects Daughter, cursive",fontSize:"1.5rem"}} to="/how" >GET STARTED</Link>
          </div>
      </div>
  )
}

