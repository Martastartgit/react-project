import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../Images/logo192.png'

class Header extends Component {
    render() {
        return (
            <div style={{background: 'white'}} >
                <div className={'wrap'}>
                    <nav className={'navbar navbar-expand-lg navbar-light'}>
                        <img className={'logo'} src={logo} alt="Logo" width="30" height="30"/>
                        <ul className={'navbar-nav mr-auto mt-2 mt-lg-0'}>
                            <li className={'nav-item active'}>
                                <Link to={'/'} className={'nav-link'}>Home</Link>
                            </li>
                            <li className={'nav-item'}>
                                <Link to={'/user'} className={'nav-link'}>Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;