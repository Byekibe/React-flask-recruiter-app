import { useState, createContext, useEffect } from 'react';

const RegisterContext = createContext();

const RegisterContextProvider = ({ children }) => {
    // const [message, setMessage] = useState(null);
    // console.log(`message: ${message}`);

    // const url = "http://localhost:7005/register"
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch(url);
    //         const data = await res.json();
    //         console.log(data)
    //         setMessage(data)
    //     }

    //     fetchData();
    //  }, [])

    const values = {
        "name": "Peter"
    }
    return (
        <RegisterContext.Provider value={values}>
            { children }
        </RegisterContext.Provider>
    );
};

export { RegisterContext, RegisterContextProvider }

