import React from 'react';
import TeamInfo from '../../Elements/teamInfo';

const header = (props) => {

    const teamInfo = (team) =>{
        if(team !=null){
            return <TeamInfo team ={team}/>;
        }
        else{
            return null;
        }
    }
    return (
        <div>
            {teamInfo(props.teamData)}
        </div>
    );
};

export default header;