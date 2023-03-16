import { initializeApp } from "firebase/app";
import {getFirestore,doc,collection,addDoc,getDoc,getDocs, updateDoc, deleteDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-39530-2023-7e7e0.firebaseapp.com",
  projectId: "react-39530-2023-7e7e0",
  storageBucket: "react-39530-2023-7e7e0.appspot.com",
  messagingSenderId: "430342645290",
  appId: "1:430342645290:web:dd90381c1e07e5677b4553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/*CRUD PRODUCTS

  CREATE
  READ
  UPDATE
  DELETE

*/

const db = getFirestore() 

export const cargarBDD = async() => {
    const promise = await fetch("./json/products.json")
    const products = await promise.json()
    products.forEach( async(prod) => {
      await addDoc(collection(db,"products"), {
        name : prod.name,
        type : prod.type,
        technologies : prod.technologies,
        idCategory : prod.idCategory,
        price : prod.price,
        stock : prod.stock,
        description : prod.description,
        teacher : prod.teacher,
        hours : prod.hours,
        img: prod.img
      })
    });
}


export const getProducts = async () => {
  const products = await getDocs(collection(db,"products"))
  const items = products.docs.map(prod => {
    return {...prod.data() , id : prod.id}
  })

  return items
}


export const getProduct = async(id) =>{
  const product = await getDoc(doc(db, "products", id))
  const item = {...product.data() , id : product.id}
  return item
}

export const updateProduct = async(id,info) =>{
  await updateDoc(doc(db,"products",id),info)
} 

export const deletePorduct = async(id) => {
    await deleteDoc(doc(db , "products" , id))
}



//Create purchase order
export const createPurchaseOrder = async(client,products,totalPrice,date) => {
    const purchaseOrder = await addDoc(collection(db , "purchaseOrder"), {
      clientData : client,
      products : products,
      totalPrice : totalPrice(),
      date : date
    })
    return purchaseOrder
}

export const getPurchaseOrder = async(id) => {
   const purchaseOrder = await getDoc(doc(db, "purchaseOrder" , id))
   const pOrder = {...purchaseOrder.data() , id : purchaseOrder.id}
   return pOrder
}