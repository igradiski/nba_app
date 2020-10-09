import React from 'react';


import styles from '../articles.css';

const postData = (props) => {
    return (
        <div className={styles.articlePostData}>
            <div>
                Date:
                <span><strong>{props.data.date}</strong></span>
            </div>
            <div>
                Author:
            <span>
                    <strong>{props.data.author}</strong>
                </span>
            </div>
        </div>

    );
};

export default postData;