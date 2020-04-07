import React from 'react';
import n from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={n.header}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
        <div className={n.loginBlock}>
            {props.isAuth ? <div>
                    {props.login}
                    <button onClick={() => {props.logout()}} >Log out</button>
            </div>
                : <NavLink to={"/login"}>Log in</NavLink>}
        </div>
    </header>
}

export default Header;