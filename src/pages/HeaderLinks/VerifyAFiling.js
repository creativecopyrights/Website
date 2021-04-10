
import "./VerifyAFiling.css"

const VerifyAFiling = () => {
    return(
        <div className="verifyContainer" >
        <div className="verifyContainer--header" >VERIFY A CERTIFICATE</div>
        <br/>
        <p className="verifyContainer--text">You can verify a filing by providing the transaction code, the digital file or the certificate ID.</p>
        <p className="verifyContainer--text" >The verification will provide date, time, name of the owner, transaction ID and public key.</p>
        <form className="verifyContainer--form" >
            <input type="text" name="code" id="code"className="verifyContainer--input" placeholder="XXX-XXX"  />
            <input type="submit" value="VERIFY" className="verifyContainer--button" />
        </form>
    </div>
    )
}

export default VerifyAFiling