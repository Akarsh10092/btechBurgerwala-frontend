import React from 'react'
import {MdError} from "react-icons/md"
import { Link } from 'react-router-dom'
function NotFound() {
  return (
   <section className='notFound'>
    <main>
        <div>
            <MdError/>
            <h1>Error 404 not found</h1>
        </div>
        <p>Page not found,kindly click below to reach HomePage</p>
        <Link to="/">Go to Home</Link>
    </main>
   </section>
  )
}

export default NotFound