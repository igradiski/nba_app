import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';



//komponente


import SideNav from '../Header/SideNav/sideNav';
//css
import style from './header.css';




const Header = (props) => {

    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
        </div>
    )

    const logo = () => {
        return (
            <Link to="/" className={style.logo}>
                <img alt="nba logo" src={`${process.env.PUBLIC_URL}/images/nba_logo.png`} ></img>

            </Link>
        )
    }
    
    return (
        <header className={style.header} >
            <SideNav {...props}></SideNav>
            <div className={style.headerOptions}>
                {navBars()}
                {logo()}
            </div>
        </header>
    )


}
export default Header;