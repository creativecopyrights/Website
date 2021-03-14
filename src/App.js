import {BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom"
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
            <BodyForm  childrenRight={<Impressum />} />
          </Route>
          <Route path="/termsandconditions" exact>
            <BodyForm  childrenRight={<TermsAndConditions />} />
          </Route>
          <Route path="/dataprotection" exact>
            <BodyForm  childrenRight={<DataProtection />} />
          </Route>
          <Route path="/pricing" exact>
            <BodyForm  childrenRight={<Pricing />} />
          </Route>
          <Route path="/usecases" exact>
            <BodyForm  childrenRight={<UseCases />} />
          </Route>
          <Route path="/how" exact>
            <BodyForm  childrenRight={<HowItWorks />} />
          </Route>
          <Route path="/verify" exact>
            <BodyForm  childrenRight={<VerifyAFiling />} />
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
          <div>YOUR IDEAS ARE YOUR POWER.</div>
          <div>PROTECT THEM.</div>
          <br/>
          <p>We provide a timestamp for your file and save it safely on a blockchain</p>
          <p> Lorem ipsum is a placeholder text used to fill unfilled spaces until proper text is found.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Phasellus id semper enim. 
              Morbi nec felis vitae enim molestie sagittis id eu sem. 
              Nulla nibh quam, commodo ac arcu a, dictum rutrum nunc. 
              Etiam eget libero semper, feugiat sem quis, interdum libero. 
              By the way if you were wondering that piece of text doesn't mean anything.
          </p>
          <div className="welcomeTextContainer__buttonGroup" >
              <button style={{fontFamily:"Architects Daughter, cursive",fontSize:"1.5rem"}} >HOW IT WORKS</button>
              <button style={{fontFamily:"Architects Daughter, cursive",fontSize:"1.5rem"}} >GET STARTED</button>
          </div>
      </div>
  )
}

