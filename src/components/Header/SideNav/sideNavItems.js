import React from 'react';
import { Link } from 'react-router-dom';

//font
import FontAwesome from 'react-fontawesome';
//css

import style from './sideNav.css';

export const sideNavItems = () => {

    //<div className={style.option}>
    //    <Link to="/">
    //         <FontAwesome name="home"> Home</FontAwesome>
    //     </Link>
    // </div>

    const items = [
        {
            type: style.option,
            icon: 'home',
            text: 'Home',
            link: '/'
        },
        {
            type: style.option,
            icon: 'far fa-file-alt',
            text: 'News',
            link: '/news'
        },
        {
            type: style.option,
            icon: 'play',
            text: 'Video',
            link: '/videos'
        },
        {
            type: style.option,
            icon: 'fas fa-sign-in-alt',
            text: 'Sign in',
            link: '/signin'
        },
        {
            type: style.option,
            icon: 'fas fa-sign-out-alt',
            text: 'Sign out',
            link: '/signout'
        }
    ]
    const showItems = () => {
        return items.map((item, i) => {
            return (
                <div key={i}className={item.type}>
                    <Link to={item.link}>
            <FontAwesome name={item.icon}> {item.text}</FontAwesome>
                    </Link>
                </div>
            )
        })

    }
    return (
        <div>
            {showItems()}
        </div>
    )
}
export default sideNavItems;