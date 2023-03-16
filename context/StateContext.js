import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({children}) => {

  const getLocalStorage = (name) => {
    if (typeof window !== 'undefined') {
      const storage = localStorage.getItem(name);

      if (storage) return JSON.parse(localStorage.getItem(name));

      if (name === 'cartItems') return [];

      return 0;
    }
  };


  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(getLocalStorage('cartItems'));
  const [totalPrice, setTotalPrice] = useState(getLocalStorage('totalPrice'));
  const [totalQuantities, setTotalQuantities] = useState(getLocalStorage('totalQuantities'));
  const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    useEffect(() => {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
      localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
      localStorage.setItem('totalQuantities', JSON.stringify(totalQuantities));
    }, [cartItems, totalPrice, totalQuantities]);


    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty - 1 < 1) return 1;
            return prevQty - 1;
        });
    }

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item._id === product._id);
  
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
        if(checkProductInCart){
     
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct._id === product._id) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
  
          setCartItems(updatedCartItems);
  
        }else{
          product.quantity = quantity;
  
          setCartItems([...cartItems, {...product}]);
        }
  
        toast.success(`${qty} ${product.name} added to the cart.`);
      }

      const onAddJuice = (juice, quantity) => {
        const checkJuiceInCart = cartItems.find((item) => item._id === juice._id);
  
        setTotalPrice((prevTotalPrice) => prevTotalPrice + juice.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
        if(checkJuiceInCart){
     
          const updatedCartItems = cartItems.map((cartJuice) => {
            if(cartJuice._id === juice._id) return {
              ...cartJuice,
              quantity: cartJuice.quantity + quantity
            }
          })
  
          setCartItems(updatedCartItems);
  
        }else{
          juice.quantity = quantity;
  
          setCartItems([...cartItems, {...juice}]);
        }
  
        toast.success(`${qty} ${juice.name} added to the cart.`);
      }


      const onAddAccessorie = (accessorie, quantity) => {
        const checkAccessorieInCart = cartItems.find((item) => item._id === accessorie._id);
  
        setTotalPrice((prevTotalPrice) => prevTotalPrice + accessorie.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
        if(checkAccessorieInCart){
     
          const updatedCartItems = cartItems.map((cartAccessorie) => {
            if(cartAccessorie._id === accessorie._id) return {
              ...cartAccessorie,
              quantity: cartAccessorie.quantity + quantity
            }
          })
  
          setCartItems(updatedCartItems);
  
        }else{
          accessorie.quantity = quantity;
  
          setCartItems([...cartItems, {...accessorie}]);
        }
  
        toast.success(`${qty} ${accessorie.name} added to the cart.`);
      }


      const onAddDevice = (device, quantity) => {
        const checkDeviceInCart = cartItems.find((item) => item._id === device._id);
  
        setTotalPrice((prevTotalPrice) => prevTotalPrice + device.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
        if(checkDeviceInCart){
     
          const updatedCartItems = cartItems.map((cartDevice) => {
            if(cartDevice._id === device._id) return {
              ...cartDevice,
              quantity: cartDevice.quantity + quantity
            }
          })
  
          setCartItems(updatedCartItems);
  
        }else{
          device.quantity = quantity;
  
          setCartItems([...cartItems, {...device}]);
        }
  
        toast.success(`${qty} ${device.name} added to the cart.`);
      }

      const onAddDisposable = (disposable, quantity) => {
        const checkDisposableInCart = cartItems.find((item) => item._id === disposable._id);
  
        setTotalPrice((prevTotalPrice) => prevTotalPrice + disposable.price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
  
        if(checkDisposableInCart){
     
          const updatedCartItems = cartItems.map((cartDisposable) => {
            if(cartDisposable._id === disposable._id) return {
              ...cartDisposable,
              quantity: cartDisposable.quantity + quantity
            }
          })
  
          setCartItems(updatedCartItems);
  
        }else{
          disposable.quantity = quantity;
  
          setCartItems([...cartItems, {...disposable}]);
        }
  
        toast.success(`${qty} ${disposable.name} added to the cart.`);
      }



      const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item._id === product._id);
        const newCartItems = cartItems.filter((item) => item._id !== product._id);

        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity);

        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }



      const toggleCartItemQuantity = (id, value) => {
        foundProduct = cartItems.find((item) => item._id === id);
        index = cartItems.findIndex((product) => product._id === id);
        const newCartItems = cartItems.filter((item) => item._id !== id);

        if(value === 'inc') {

            setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity + 1}]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
            setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
        }else if(value === 'dec'){
            if(foundProduct.quantity > 1){
                setCartItems([...newCartItems, {...foundProduct, quantity: foundProduct.quantity - 1}]);
                setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
                setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
            }
        }
      }

      

    return(
        <Context.Provider value={{ 
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            toggleCartItemQuantity,
            onRemove,
            onAddJuice,
            onAddAccessorie,
            onAddDevice,
            onAddDisposable,
            setCartItems,
            setTotalPrice,
            setTotalQuantities
         }}>
            {children}
        </Context.Provider>
    )


}


export const useStateContext = () => useContext(Context);