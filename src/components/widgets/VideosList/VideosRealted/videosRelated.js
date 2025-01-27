import React from 'react';

import styles from '../videosList.css';

import VideosListTemplate from '../VideosTemplate'
const videosRelated = (props) => {
    console.log(props.data)
    return (
        <div className={styles.relatedWrapper}>
            <VideosListTemplate data={props.data} teams={props.teams}/>
            
        </div>
    );
};

export default videosRelated;