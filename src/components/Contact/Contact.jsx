import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDarkModeContext } from "../../context/DarkModeContext";



const Contact = () => {
    let navigate = useNavigate()
    const dataForm = React.useRef()   
    const {darkMode} = useDarkModeContext()



    const consultForm = (e) => {
        e.preventDefault()
        // console.log(dataForm.current) // I am asking about the current status of the form
        const datForm = new FormData(dataForm.current) //Generate an iterator object of these data
        // console.log(datForm) // Print iterator object
        const contact = Object.fromEntries(datForm) // switch iterator object to an object whose i will be able to see his properties
        // console.log(contact)
        e.target.reset()
        toast.success("Query has been sent successfully")
        navigate("/")
    } // Incluiding it I could be able to get each value from the form





    return (
        <div>
            <form onSubmit={consultForm} ref = {dataForm} className = "contact-form">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name and Surname
                    </label>
                    <input type="text" className={`form-control ${darkMode ? "inputDark" : ""}`} name="name" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input type="email" className={`form-control ${darkMode ? "inputDark" : ""}`} name="email" required/>
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="feedback" className="form-label">
                        Let us your feedback
                    </label>
                    <textarea className={`form-control ${darkMode ? "inputDark" : ""}`} name="feedback" required />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
