import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import axios from 'axios';

import CardInfo from '../CardInfo/cardInfo';
import Button from '../Buttons/buttons';

import { URL } from '../../../config';


import style from './newsList.css';

export class NewsList extends Component {
    state = {
        teams: [],
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }

    componentDidMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        axios.get(`${URL}/teams`)
            .then(response => {
                this.setState({
                    teams: response.data

                })
            })
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                this.setState({
                    items: [...this.state.items, ...response.data],
                    start,
                    end
                })
            })
    }

    loadMore = () => {
        let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }



    renderNews = (type) => {
        let template = null;

        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: style.newsList_wrapper,
                            enterActive: style.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={style.newsList_item}>
                                <Link to={`article/${item.id}`}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>
                ));
                break;
            case ('cardMain'):
                template = this.state.items.map((item, i) => (
                    <CSSTransition
                        classNames={{
                            enter: style.newsList_wrapper,
                            enterActive: style.newsList_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <Link to={`/articles/${item.id}`}>
                            <div className={style.flex_wrapper}>
                                <div className={style.left}
                                    style={{
                                        background:`url('/images/articles/${item.image}')`
                                    }}>
                                    <div></div>
                                </div>
                                <div className={style.right}>
                                    <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>
                                    <h2>{item.title}</h2>
                                </div>
                            </div>
                        </Link>
                    </CSSTransition>
                ));



                break;
            default:
                template = null;
                break;
        }
        return template;
    }
    render() {

        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="lists"
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadMore={() => this.loadMore()}
                    cta="Load more news"
                />

            </div>
        )
    }
}

export default NewsList;