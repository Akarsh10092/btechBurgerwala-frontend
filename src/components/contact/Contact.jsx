import React from 'react'
import burger from "../../assest/burger2.png"
import {motion} from "framer-motion"
const Contact = () => {
  return (
    <section className='contact'>
        <motion.form
        initial={{
            x:"-100vw",
            opacity:"0"
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{delay:0.2}}>
            <h2>Contact us
            </h2>
            <input type="text" placeholder='Name'/>
            <input type="email" placeholder='Your Email'/>
            <textarea placeholder='Your message...' cols="30" rows="10"></textarea>
            <button type='submit'>Submit</button>
        </motion.form>
        <motion.div className='formBorder'
        initial={{
            x:"100vw",
            opacity:"0"
        }}
        animate={{
            x:0,
            opacity:1
        }}
        transition={{delay:0.2}}
        >
            <motion.div
            initial={{
                y:"-100vh",
                x:"50%",
                opacity:0
            }}
            animate={{
                x:"50%",y:"-50%",
                opacity:1
            }}
            transition={{delay:1}}>
                <img src={burger} alt='Burger'></img>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Contact