import { useState , useEffect } from "react";


const Dollar = () => {

    const [dollar, setDollar] = useState([])
    useEffect(() =>{
        fetch("https://criptoya.com/api/dolar")
        .then(response => response.json()) //Data convertion
        .then(({ blue, oficial, solidario, mep }) => {
            const skeleton =
                <>
                    <p>Dolar Blue ${blue}</p>
                    <p>Dolar Oficial ${oficial}</p>
                    <p>Dolar Solidario ${solidario}</p>
                    <p>Dolar MEP ${mep}</p>
                </>
                setDollar(skeleton)
        })
        .catch(err => console.error(err))
    }, [])



    return (
        <>
            {dollar}
        </>
    );
}

export default Dollar;
