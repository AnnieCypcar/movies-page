import React, { Fragment } from 'react';
import { BASE_IMAGE_URL, SIZE } from '../constants/Queries';
import FavoriteButton from './FavoriteButton';
import './MovieDetail.scss';

const MovieDetail = ({ data, closeDetail, isFavorite, handleFavorite }) => {
    return (
        <Fragment>
            <div className='detail-container'>
                <div className='detail-content-container'>
                    <div className='detail-movie-poster'>
                        <img
                            src={BASE_IMAGE_URL + SIZE.LARGE + data.poster_path}
                            alt={data.original_title} />
                    </div>
                    <div className='detail-copy'>
                        <h1 className='detail-movie-title'>{data.original_title}</h1>
                        <p>{data.overview}</p>
                        <FavoriteButton
                            isFavorite={isFavorite}
                            handleFavorite={handleFavorite} />
                    </div>
                </div>
                <button className='detail-close-button' onClick={closeDetail}>x</button>
            </div>
            <div className='detail-background'></div>
        </Fragment>
    )
}
export default MovieDetail;