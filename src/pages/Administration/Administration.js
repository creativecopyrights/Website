import {useState,useEffect} from "react"


import "./Administration.css"

// Components
import Login from "./login/Login"
import AdminSettings from "./settings/AdminSettings"

const Administration = () => {


    const [token,setToken] = useState("")

    if (token !== "eth-karo"){
        return <Login setToken={setToken} />
    }

    return(
       <AdminSettings />
    )
}


export default Administration