import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext()

export const ContextProvider = ({children})=>{ 
    const [user, setUser] = useState([]);
    const [count, setCount] = useState(1)
   
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || [])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        localStorage.setItem("wishlist", JSON.stringify(wishlist))
    }, [wishlist])

    return <Context.Provider value={{count, setCount, wishlist, setWishlist, cart, setCart,user,setUser}}>{children}</Context.Provider>
}

export const useStateValue = () => useContext(Context) 