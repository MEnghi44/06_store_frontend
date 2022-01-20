

import React, { Component } from 'react'
import { useState } from 'react/cjs/react.development'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

function Menu() {
    
    const [isOpen, setIsOpen] = useState();
    const toggle = () =>setIsOpen(!isOpen);

    return (
        
            <Navbar className='navbar navbar-expand-md navbar-dark fixed-top bg-dark' expand= 'md'>
                <NavbarBrand href='/'>SE Store</NavbarBrand>
                <NavbarToggler onClick={toggle}/>
                <Collapse isOpen= {isOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href='/'>Product List</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/add'>Add new product</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    );
}

export default Menu

