import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import '../Home/Css/orelega-one.css';


const Header = () => {
  return (
    <div>
      <Navbar  className="w-full bg-inherit">
            <div className="container mx-auto flex justify-between items-center">
                <Navbar.Brand href="/Home" className="font-montserrat font-bold text-lime-700 text-3xl" style={{ fontFamily: 'Orelega One, cursive' }}>Foody.</Navbar.Brand>
                <div className="flex justify-between items-center">
                    <Nav className="mr-auto space-x-20">
                    <Nav.Link href="/" className="text-lime-700 text-sm font-semibold">Home</Nav.Link>
                    <Nav.Link href="#" className="text-lime-700 text-sm font-semibold">Restaurants</Nav.Link>
                    <Nav.Link href="#" className="text-black text-sm font-semibold">Menus</Nav.Link>
                    <Nav.Link href="/AboutUs" className="text-black text-sm font-semibold">About Us</Nav.Link>
                    <Nav.Link href="#" className="text-black text-sm font-semibold">Contact</Nav.Link>
                    </Nav>
                </div>
                
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <IoSearch size={15} />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <BsCart4 size={15} />
                    </div>
                    <div className="bg-white rounded-full px-3 py-1 text-xs font-semibold">Log In</div> {/* Login button */}
                </div>
            </div>
        </Navbar>
    </div>
  )
}

export default Header
