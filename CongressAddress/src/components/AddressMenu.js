/**
 * Created by Andrew Wilson on 5/1/17.
 */

import React, {Component} from 'react';
import {
        Link
} from 'react-router-dom';
import '../css/App.css';
import { MenuItem, Nav, Navbar, NavDropdown, NavItem   } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class AddressMenu extends Component {

    render() {

        const navbarInstance = (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to='/'><NavItem>CongressAddress</NavItem></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to='/'><NavItem>Address Show</NavItem></LinkContainer>
                        <NavDropdown eventKey={3} title='Dropdown' id='basic-nav-dropdown'>
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href='#'>Link Right</NavItem>
                        <NavItem eventKey={2} href='#'>Link Right</NavItem>
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
