/**
 * Created by Andrew Wilson on 5/1/17.
 */

import React, {Component} from 'react';
import '../css/App.css';
import { Nav, Navbar, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AddressMenu extends Component {

    render() {

        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer exact to='/'><NavItem>CongressAddress</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/edit'><NavItem>Edit Address</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/small'><NavItem>Small Numbers</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );

        return (

                <div>
                    {navbarInstance}
                </div>

            /*<div className='AppLink'>
                <ul>
                    <li><Link to='/'>AddressShow</Link></li>
                    <li><Link to='/edit'>AddressEdit</Link></li>
                    <li><Link to='/small'>SmallNumbers</Link></li>
                </ul>
            </div> */

        );
    }
}

export default AddressMenu;
