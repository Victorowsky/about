import TextField from "./TextField";
import "./Contact.css";
import ContactSvg from "../svg/Contact.svg";
import { DataContext } from "../../App";
import { useContext, useState } from "react";
import Button from "./Button";
import Success from "./Success";
import Error from "./Error";
import Loading from './Loading';

const Contact = () => {
  const { contactRef } = useContext(DataContext);
  const [textValue, setTextValue] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading]= useState(false)

  const handleSendData = () => {
    const URL = "https://stormy-refuge-26952.herokuapp.com";
    if (textValue && email && name) {
      

      // EMAIL MUST INCLUDES @ 
      if(email.includes("@")){
        setIsLoading(true)
      fetch(`${URL}/sendMail/${name}/${email}/${textValue}`)
        .then((res) => res.json())
        .then((res) => {
          setIsSuccess(true);
          setSuccessMessage(res.message);
          setEmail("");
          setName("");
          setTextValue("");
          setIsLoading(false)
        });
      }else{
        setIsError(true)
        setErrorMessage('Check your email again')
      }
      //////////////////
      
    } else {
      setIsError(true);
      setErrorMessage("Check your details again");
    }
  };

  return (
    <div className="contactContainer">
      <img src={ContactSvg} alt="Contact" />
      <div className="contact" ref={contactRef}>
        <h2>Contact with me?</h2>
        <div className="inputs">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <TextField textValue={textValue} setTextValue={setTextValue} isLoading={isLoading} />

        <Button onClick={handleSendData} />
      </div>

      <Success
        isSuccess={isSuccess}
        setIsSuccess={setIsSuccess}
        successMessage={successMessage}
      />
      <Error
        isError={isError}
        setIsError={setIsError}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default Contact;
