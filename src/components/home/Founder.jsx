import React from 'react'
import { motion} from "framer-motion"
import me from "../../assest/20191116153411.jpg"
const Founder = () => {
    const options = {
        initial: {
          x: "-100%",
          opacity: 0,
        },
        whileInView: {
          x: 0,
          opacity: 1,
        },
      };
    
    
  return (
    <section className='founder'>
        <motion.div
        {...options}>
            <img src={me} alt='Founder' height={200} width={200}/>
            <h3>Aakarsh Agarwal</h3>
            <p>Hey everyone this me Aakarsh a Btech Enginner founder of this 
                Btech Burger Wala.
             <br/>
                Our is aim to provide you with delectable food options to satisfy your palette
            </p>
        </motion.div>
    </section>
  )
}

export default Founder