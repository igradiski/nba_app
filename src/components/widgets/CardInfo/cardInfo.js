import React from 'react';
import FontAwesome from 'react-fontawesome';

import style from './cardInfo.css'

const CardInfo = (props) => {



const teamNames = (teams,teamID) =>{
    let data = teams.find((item)=>{
        return item.id === teamID
    });
    if(data){
        return data.name
    }
}
        


    return (
        
        <div className={style.cardInfo}>
            <span className={style.teamName}>
                {teamNames(props.teams,props.team)}
            </span>
            <span className={style.date}>
               <FontAwesome name="fas fa-calendar-alt"> {props.date}</FontAwesome> 
            </span>
        </div>
    );
};

export default CardInfo;