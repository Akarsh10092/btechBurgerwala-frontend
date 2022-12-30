import React from 'react'
import {motion} from "framer-motion"
import burger1 from "../../assest/burger1.png"
import burger2 from "../../assest/burger2.png"
import burger3 from "../../assest/burger3.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
    const CartItem = ({value,title,image,increment,decrement})=>(
        <motion.div 
        initial={{
            x:"-100%",
            opacity:0
           }}
           whileInView={{
            x:0,
            opacity:1
           }}
           transition={{
            delay:0.4
           }}
        className='cartItem'>
            <div>
                <h4>
                    {title}
                 </h4>
                 <img src={image} alt="item"></img>
            </div>
            <div>
                <button onClick={decrement}>-</button>
                <input type="number" value={value} readOnly/>
                <button onClick={increment}>+</button>

            </div>
        </motion.div>
    );
    const Cart = ()=>{
        const {
            cartItems: {
                chesseBurger: { quantity: chesseBurger },
              nonVegCheesilicious: { quantity: nonVegCheesilicious },
              cheesiliciousBurgerwithfries: { quantity: cheesiliciousBurgerwithfries },
            },
            subTotal,
            tax,
            shippingCharges,
            total,
          } = useSelector((state) => state.cart);
        const {cartItems:orderItems} = useSelector((state)=>state.cart)
        const dispatch = useDispatch();

    const increment =(item)=>{
        switch(item){
            case 1:
                dispatch({type:"chesseBurgerIncrement"});
                dispatch({type:"calculatePrice"})
                break;
                case 2:
                dispatch({type:"nonVegCheesiliciousIncrement"});
                dispatch({type:"calculatePrice"})
                break;
                case 3:
                dispatch({type:"cheesiliciousBurgerwithfriesIncrement"});
                dispatch({type:"calculatePrice"})
                break;
                default:dispatch({type:"chesseBurgerIncrement"});
                dispatch({type:"calculatePrice"})
                break;
        }
    }
    const decrement=(item)=>{
        switch(item){
            case 1:
                if(chesseBurger===0) break;
                dispatch({type:"chesseBurgerDecrement"});
                dispatch({type:"calculatePrice"})
                break;
                case 2:
                if(nonVegCheesilicious===0) break;
                dispatch({type:"nonVegCheesiliciousDecrement"});
                dispatch({type:"calculatePrice"})
                break;
                case 3:
                    if(cheesiliciousBurgerwithfries===0) break;
                dispatch({type:"cheesiliciousBurgerwithfriesDecrement"});
                dispatch({type:"calculatePrice"})
                break;
                default:
                    if(chesseBurger===0) break;
                    dispatch({type:"chesseBurgerDecrement"});
                dispatch({type:"calculatePrice"})
                break;
    }
}
useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(orderItems));
    localStorage.setItem(
      "cartPrices",
      JSON.stringify({
        subTotal,
        tax,
        shippingCharges,
        total,
      })
    );
  }, [orderItems, subTotal, tax, shippingCharges, total]);
  return (
   <section className='cart'>
    <main>
       <CartItem title={"Chesse Burger"} image={burger1} value={chesseBurger}
       increment={()=>{increment(1)}} decrement={()=>{decrement(1)}}/>
       <CartItem title={"Non Veg Cheesilicious Burger"} image={burger2} value={nonVegCheesilicious}
       increment={()=>{increment(2)}} decrement={()=>{decrement(2)}}/>
       <CartItem title={"Cheesilicious Burger with fries"} image={burger3} value={cheesiliciousBurgerwithfries}
       increment={()=>{increment(3)}} decrement={()=>{decrement(3)}}/>
       <article>
        <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
        </div>
        <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
        </div>
        <div>
            <h4>Shipping charges</h4>
            <p>₹{shippingCharges}</p>
        </div>
        <div>
            <h4>Toatal</h4>
            <p>₹{total}</p>
        </div>
        <Link to="/shipping"> Checkout</Link>
       </article>
    </main>
   </section>
  )
};
export default Cart