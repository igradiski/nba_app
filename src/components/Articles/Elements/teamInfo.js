import React from 'react';

import styles from '../articles.css'

const teamInfo = (props) => {
    return (
        <div className={styles.articleTeamHeader}>
            <div className={styles.left}
            style={{
                background:`url('/images/teams/${props.team.logo}')`
            }}>



            </div>
            <div className={styles.right}>
                <div>
                    <span>
                        {props.team.city} {props.team.name}
                    </span>
                </div>
                <div>
                    <strong>
                        W{props.team.stats[0].wins} -
                        D{props.team.stats[0].defeats}
                    </strong>
                </div>
            </div>
        </div>
    );
};

export default teamInfo;