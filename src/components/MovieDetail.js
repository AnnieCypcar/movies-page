import React, { Fragment } from 'react';
import { BASE_IMAGE_URL, SIZE } from '../constants/Queries';
import './MovieDetail.scss';

/*
- Each movie includes a title, poster thumbnail, release date, details button and
popularity metric.
- When the user taps “Show Details”, the app shows a detail view of the movie,
including a Favorite toggle button, the movie overview text, and a close button
that returns to the list.
- The app does not need to persist favorites between refreshes, but should
maintain favorites throughout navigation during a session.

{
  "adult": false,
  "backdrop_path": "/en971MEXui9diirXlogOrPKmsEn.jpg",
  "belongs_to_collection": {
    "id": 448150,
    "name": "Deadpool Collection",
    "poster_path": "/30c5jO7YEXuF8KiWXLg9m28GWDA.jpg",
    "backdrop_path": "/dTq7mGyAR5eAydR532feWfjJjzm.jpg"
  },
  "budget": 58000000,
  "genres": [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 35,
      "name": "Comedy"
    }
  ],
  "homepage": "http://www.foxmovies.com/movies/deadpool",
  "id": 293660,
  "imdb_id": "tt1431045",
  "original_language": "en",
  "original_title": "Deadpool",
  "overview": "Deadpool tells the origin story of former Special Forces operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
  "popularity": 42.625,
  "poster_path": "/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
  "production_companies": [
    {
      "id": 7505,
      "logo_path": "/837VMM4wOkODc1idNxGT0KQJlej.png",
      "name": "Marvel Entertainment",
      "origin_country": "US"
    },
    {
      "id": 22213,
      "logo_path": "/qx9K6bFWJupwde0xQDwOvXkOaL8.png",
      "name": "TSG Entertainment",
      "origin_country": "US"
    },
    {
      "id": 25,
      "logo_path": "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      "name": "20th Century Fox",
      "origin_country": "US"
    },
    {
      "id": 28788,
      "logo_path": null,
      "name": "Genre Films",
      "origin_country": "US"
    },
    {
      "id": 431,
      "logo_path": null,
      "name": "The Donners' Company",
      "origin_country": "US"
    }
  ],
  "production_countries": [
    {
      "iso_3166_1": "US",
      "name": "United States of America"
    }
  ],
  "release_date": "2016-02-09",
  "revenue": 783100000,
  "runtime": 108,
  "spoken_languages": [
    {
      "iso_639_1": "en",
      "name": "English"
    }
  ],
  "status": "Released",
  "tagline": "Witness the beginning of a happy ending",
  "title": "Deadpool",
  "video": false,
  "vote_average": 7.6,
  "vote_count": 22404
}
*/


const MovieDetail = ({ data, closeDetail }) => {
    return (
        <Fragment>
            <div className='detail-container'>
                <div className='detail-content-container' onClick={closeDetail}>
                    <div className='detail-movie-poster'>
                        <img
                            src={BASE_IMAGE_URL + SIZE.LARGE + data.poster_path}
                            alt={data.original_title} />
                    </div>
                    <div className='detail-copy'>
                        <h1 className='detail-movie-title'>{data.original_title}</h1>
                        <p>{data.overview}</p>
                    </div>
                </div>
                <button className='detail-close-button' onClick={closeDetail}>x</button>
            </div>
            <div className='detail-background'></div>
        </Fragment>
    )
}
export default MovieDetail;