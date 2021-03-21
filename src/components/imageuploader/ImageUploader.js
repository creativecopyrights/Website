import {useState, useEffect} from "react"

import Web3 from "web3"

import MyContract from  "../../contracts/MyContract"


const ImageUploader = () => {

    const [account, setAccount] = useState("")

    async function loadBlockchainData(){
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545" )

        const network = await web3.eth.net.getNetworkType()

        const accountResult = await web3.eth.getAccounts()
      
        setAccount(accountResult[0])
        console.log("Account Result: " + accountResult)
        console.log(network)
        console.log(account)



    }


    useEffect(()=>{

        loadBlockchainData()

    })


    return(
        <div>
            <h1>ImageUploader</h1>
    
            <p>Your account : 0x751B0Ec05Fa913e80aA11d58526EAA7a93118120</p>
        </div>
    )
}


export default ImageUploader