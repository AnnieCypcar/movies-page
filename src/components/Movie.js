import React from 'react';
import { BASE_IMAGE_URL, SIZE } from '../constants/Queries';
import { MONTHS } from '../constants/Dates';
import './Movie.scss';

/*
- Each movie includes a title, poster thumbnail, release date, details button and
popularity metric.
- When the user taps “Show Details”, the app shows a detail view of the movie,
including a Favorite toggle button, the movie overview text, and a close button
that returns to the list.
- The app does not need to persist favorites between refreshes, but should
maintain favorites throughout navigation during a session.

{
    popularity: 14.007,
    id: 213,
    video: false,
    vote_count: 2252,
    vote_average: 8,
    title: "North by Northwest",
    release_date: "1959-07-08",
    original_language: "en",
    original_title: "North by Northwest",
    genre_ids: [9648, 53],
    backdrop_path: "/uL7nTO46KAup4bkYmz1A3on036B.jpg",
    adult: false,
    overview: "Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.",
    poster_path: "/9pf8CuIT64cFvsyocWOjbKGcXmt.jpg"
}
*/


const Movie = ({ data, showDetails }) => {
    const releaseDate = new Date(data.release_date);
    const formattedDate = `${MONTHS[releaseDate.getMonth()]} ${releaseDate.getDate()}, ${releaseDate.getFullYear()}`;

    return (
        <div className='movie-container' key={data.id}>
            <div className='movie-rating-top-left'>
                <span className='movie-rating'>{Math.round(data.popularity)}%</span>
            </div>
            <div className='movie-poster'>
                <img
                    src={BASE_IMAGE_URL + SIZE.SMALL + data.poster_path}
                    alt={data.original_title} />
            </div>
            <span className='movie-title'>{data.original_title}</span>
            <span className='movie-release-date'>{formattedDate}</span>
            <button className='movie-show-details-button' onClick={showDetails}>show details</button>
        </div>
    )
}
export default Movie;