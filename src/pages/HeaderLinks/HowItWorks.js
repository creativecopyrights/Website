

import "./HowItWorks.css"

const HowItWorks = () => {
    return(
        <div className="howItWorksContainer" >
            <ul>
                    {
                HowItWorksSection.map(s => {
                    return(
                        <li key={s.number+s.text} >  
                            <div className="howItWorksContainer--upper" >{s.number}) {s.title}</div>
                            <div className="howItWorksContainer--inner" >{s.text}</div>
                        </li>
                    )
                })
                        }
            </ul>
    </div>
    )
}

const HowItWorksSection = [
    {
        number: 1,
        title:  "DRAG AND DROP",
        text:   "Drag your file in the box click on the plus. One file per filling."
    },
    {
        number: 2,
        title:  "FILL THE FORM",
        text:   "Fill your name and e-mail adress. We'll send you a verification code" +
                "to the provided e-mail. After you've filled the code into the checkbox,"+
                " you're ready to proceed to checkout. "
    },
    {
        number: 3,
        title:  "PAYMENT",
        text:   "We accept Paypal, and will accept crypto in future. For pricing info click here"
    },
    {
        number: 4,
        title:  "CERTIFICATE",
        text:   "You will be issued a certificate with your name, timing of transaction, transaction code, blockchain key and instructions on how to verify your filing"
    },

]

export default HowItWorks