import './Navbar.css'
import { useState } from 'react'
import nav from '../Pictures/nav.png'





const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div>


    <nav className='navbar'>
      <div className="nav"><a href="#">
        <img src={nav} alt="" />
        </a></div>
      
         <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <li><a href="https://www.youtube.com/watch?v=HSecsX0vAOg&list=PLC3y8-rFHvwh-K9mDlrrcDywl7CeVL2rO&index=23'">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Faq</a></li>
        <li><a href="#">Contact</a></li>
       
      </ul>
      <p className='hanbarger' onClick={handleMenuToggle}><i className="fa-solid fa-burger"></i></p>
      
      <div className='profile'> <a href="#"></a></div>
      
    </nav>
   
   
        

   

    </div>
  )
}

export default Navbar
