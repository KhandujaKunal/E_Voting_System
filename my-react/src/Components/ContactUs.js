import React from 'react'
// import './ContactUs.css'

function ContactUs() {
  return (
   <div className="App">

     <header>
         <div className="logo">
           <img src="EVS logo.png" alt="E-Voting System Logo"/>
         </div>
         <nav>
             <ul>
                <li><a href="home1.html">Home</a></li>
                <li><a href="Contact.html">Contact </a></li>
                <li><a href="#">About Us</a></li>
             </ul>
        </nav>
     </header>
    
    <main>
         <div className="content">
           <h1 ><u>Need any help ?</u> </h1>
           <h4> Online Voting System </h4>
           <p> <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vel 
           odio veniam corporis non porro mollitia minima 
           vero minus provident quibusdam tempore inventore, rerum exercitationem 
            amet enim consequatur hic! Numquam non? Quam!</b>
          </p>
         </div>
         <div className="ContactUs">
            <h4><u> Contact Us </u></h4>
           <p> 123 Anywhere St , Any </p>
           <p> City , ST 12345</p>
           <p> hello@reallygreatsite.com</p>
           <p> +123-456-7890</p>
         </div>
     </main>

     <footer>
        <p>@2024 Voting System. All Rights Reserved. Terms of use|Privacy Environment Policy</p>
     </footer>

  </div>
  
  )
}

export default ContactUs
