import React from 'react'
import MenuCard from './MenuCard'
import burger1 from "../../assest/burger1.png"
import burger2 from "../../assest/burger2.png"
import burger3 from "../../assest/burger3.png"
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
const Menu = () => {
  const dispatch = useDispatch();

    const addToCartHandler=(itemNum)=>{
      switch(itemNum){
        case 1:
          dispatch({type:"chesseBurgerIncrement"})
          dispatch({type:"calculatePrice"})
          toast.success("Added to cart")
        break;
        case 2:
          dispatch({type:"nonVegCheesiliciousIncrement"})
          dispatch({type:"calculatePrice"})
          toast.success("Added to cart")
        break;
        case 3:
          dispatch({type:"cheesiliciousBurgerwithfriesIncrement"})
          dispatch({type:"calculatePrice"})
          toast.success("Added to cart")
        break;
        default:
          dispatch({type:"chesseBurgerIncrement"})
          dispatch({type:"calculatePrice"})
          toast.success("Added to cart")
          break;
      }
    }
  return (
    <section id='menu'>
        <h1>Menu</h1>
        <div>
            <MenuCard 
            itemNum={1}
            burgerSrc={burger1}
            price={200}
            title={"Cheese Burger"}
            handler={addToCartHandler}
            delay={0.1}/>
            <MenuCard 
            itemNum={2}
            burgerSrc={burger2}
            price={500}
            title={"Non Veg Cheesilicious Burger"}
            handler={addToCartHandler}
            delay={0.5}/>
            <MenuCard 
            itemNum={3}
            burgerSrc={burger3}
            price={1800}
            title={"Cheesilicious Burger with fries"}
            handler={addToCartHandler}
            delay={0.8}/>
        </div>
    </section>
  )
}

export default Menu