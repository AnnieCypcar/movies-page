import React, { Component } from 'react';
import Api from './services/Api';
import Page from './components/Page';
import './App.scss';
import {
    LANGUAGE,
    SORT_BY,
    SORT_OPTIONS,
    SORT_DIRECTION,
    LIMIT
} from './constants/Queries';

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        const query = `year=2016&language=${LANGUAGE.ENGLISH}&${SORT_BY}=\
            ${SORT_OPTIONS.POPULARITY}.${SORT_DIRECTION.DESC}&limit=${LIMIT.PAGE_MAX}`;

        Api.getMovieData(query).then((data) => {
            if (data && data.results) {
                this.setState({
                    items: data.results
                });
            }
        });
    }
    render() {
        return (
            <div className="app">
                <Page items={this.state.items} />
            </div>
        );
    }
}

export default App;
