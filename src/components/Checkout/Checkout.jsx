import { useState, useRef } from 'react';
import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


//Firebase 
import { createPurchaseOrder , getPurchaseOrder , getProduct , updateProduct } from '../../firebase/firebase';

const Checkout = () => {
    const [email, setEmail] = useState("")
    const [repEmail , setRepEmail] = useState("")
    const { darkMode } = useDarkModeContext()
    const { cart, emptyCart, totalPrice } = useCartContext()
    const dataForm = useRef()
    let navigate = useNavigate()
    
    
    const consultForm = (e) => {
        e.preventDefault()    
        const datForm = new FormData(dataForm.current)
        const client = Object.fromEntries(datForm)
        const aux = [...cart]

        aux.forEach(producCart => {
            getProduct(producCart.id).then(prodDBB => {
                prodDBB.stock -= producCart.amm
                updateProduct(producCart.id, prodDBB)
            })

        if (email === repEmail){
            createPurchaseOrder(client , aux , totalPrice , new Date().toISOString()).then(purchaseOrder => {
                toast.success(`Thanks to shopping with us your purchase order is ${purchaseOrder.id} , total price is ${new Intl.NumberFormat("de-DE").format(totalPrice())}`)
                emptyCart()
                e.target.reset()
                navigate("/")
            })
        } else{
            toast.error("Emails are not the same")
        }
        })


    }
    return (
        <>
            {cart.length === 0
                ?
                <>
                    <h2>Empty cart</h2>
                </>
                :
                <div>
                    <form onSubmit={consultForm} ref = {dataForm} className="contact-form">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Name and Surname
                            </label>
                            <input type="text" className={`form-control ${darkMode ? "inputDark" : ""}`} name="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input type="email" className={`form-control ${darkMode ? "inputDark" : ""}`} name="email" id='email' value={email} onChange = {e => setEmail(e.target.value)} required />
                            <div id="emailHelp" className="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Repeat Email address
                            </label>
                            <input type="email" className={`form-control ${darkMode ? "inputDark" : ""}`} name="repEmail" id='repemail' value={repEmail} onChange = {e => setRepEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="feedback" className="form-label">
                                Address
                            </label>
                            <input type="text" className={`form-control ${darkMode ? "inputDark" : ""}`} name="direction" required />
                        </div>
                        <button type="submit" className="btn btn-success my-5 d-block mx-auto">
                            End Purchase
                        </button>
                    </form>
                </div>
            }

        </>
    );
}

export default Checkout;
