import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import "./UseCases.css"

const UseCases = () => {


    const addRotation = (e) => {
    const a =   document.querySelectorAll("div")
    
        a.forEach((item,index)=>{
            item.classList.remove("open")
        })

        e.target.classList.add("open")
    }

    return(
        <div >
<Accordion className="useCaseContainer" >
{
    Items.map(item => {
        return(
            <AccordionItem className="useCaseItem" >
                <AccordionItemHeading className="useCaseItem--header"  onClick={addRotation} >
                    <AccordionItemButton className="useCaseItem--button" >
                        {item.title}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="useCaseItem--text"  >
                    <p>
                    {item.text}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        )
    })
}
</Accordion>

    


   
    </div>
    )
}

const Items = [
    {
        title:  "CREATIVE WORK AND DESIGNS",
        text:   "Text 1"
    },
    {
        title:  "TRADE SECRETS AND KNOW-HOW",
        text:   "Text 2"
    },
    {
        title:  "RESEARCH AND DATA",
        text:   "Text 3"
    },
    {
        title:  "DIGITAL ASSETS",
        text:   "Text 4"
    },
    {
        title:  "CREATIVE WORK AND DESIGNS",
        text:   "Text 1"
    },
    {
        title:  "TRADE SECRETS AND KNOW-HOW",
        text:   "Text 2"
    },
    {
        title:  "RESEARCH AND DATA",
        text:   "Text 3"
    },
    {
        title:  "DIGITAL ASSETS",
        text:   "Text 4"
    },
]

export default UseCases