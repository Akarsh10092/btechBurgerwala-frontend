import React from 'react'
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
const Footer = () => {
  return (
   <footer>
     <div>
        <h2>Btech Burger Wala</h2>

        <p>We are trying to give you the best taste possible.</p>
        <br />

        <em>We give attention to genuine feedback.</em>

        <strong>All right received @btechburgerwala</strong>
      </div>
    <aside>
        <h4>Follow us</h4>
        <a href='https://www.instagram.com/agarwal.aakarsh_/'><AiFillInstagram/></a>
        <a href='https://www.linkedin.com/in/akarsh-agarwal-16964788/'><AiFillLinkedin/></a>
        <a href='https://github.com/Akarsh10092'><AiFillGithub/></a>
    </aside>
   </footer>
  )
}

export default Footer
