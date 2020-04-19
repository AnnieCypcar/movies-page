import React, { Component } from 'react';
import Api from './services/Api';
import Page from './components/Page';
import MovieDetail from './components/MovieDetail';
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
            items: [],
            isDetailVisible: false,
            details: {}
        };
        this.handleShowMovie = this.handleShowMovie.bind(this);
    }

    async componentDidMount() {
        const query = `primary_release_year=2016&language=${LANGUAGE.ENGLISH}&\
            ${SORT_BY}=${SORT_OPTIONS.POPULARITY}.${SORT_DIRECTION.DESC}&limit=${LIMIT.PAGE_MAX}`;

        const data = await Api.getMoviesWithQuery(query);

        if (data && data.results) {
            this.setState({
                items: data.results
            });
        }
    }

    async handleShowMovie(id) {
        const details = await Api.getMovieDetails(id);
        this.setState({
            isDetailVisible: true,
            details
        });
    }

    closeDetail() {
        this.setState({
            isDetailVisible: false,
            details: {}
        });
    }

    render() {
        const appClasses = `app ${this.state.isDetailVisible ? 'modal-is-open' : ''}`;
        return (
            <div className={appClasses}>
                <Page
                    items={this.state.items}
                    showDetails={(id) => this.handleShowMovie(id)} />
                {this.state.isDetailVisible &&
                    <MovieDetail
                        data={this.state.details}
                        closeDetail={() => this.closeDetail()} />}
            </div>
        );
    }
}

export default App;
