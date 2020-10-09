import React from 'react';
import {Link} from 'react-router-dom';
import {CURRENT_YEAR} from '../../config';


//css
import style from './footer.css';

const Footer = () => {
    return (
        <div className={style.footer}>
            <Link to="/" className={style.logo}>
            <img alt="nba logo" src={`${process.env.PUBLIC_URL}/images/nba_logo.png`} ></img>
            </Link>
            <div className={style.right}>
                @NBA {CURRENT_YEAR}  All right reserved.
            </div>
        </div>
    );
};

export default Footer;