import React from 'react';
import { BASE_IMAGE_URL, SIZE } from '../constants/Queries';
import { MONTHS } from '../constants/Dates';
import './Movie.scss';

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