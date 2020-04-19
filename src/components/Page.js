import React from 'react';
import Movie from './Movie';
import './Page.scss';

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
    title: 'North by Northwest',
    release_date: '1959-07-08',
    original_language: 'en',
    original_title: 'North by Northwest',
    genre_ids: [9648, 53],
    backdrop_path: '/uL7nTO46KAup4bkYmz1A3on036B.jpg',
    adult: false,
    overview: 'Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.',
    poster_path: '/9pf8CuIT64cFvsyocWOjbKGcXmt.jpg'
}
*/


const Page = ({ items, showDetails }) => {
    return (
        <div className='page-container'>
            <h1>Top Movies from 2016</h1>
            <div className='movie-list-container'>
                {items.map((item) => {
                    return (
                        <Movie
                            key={item.id}
                            data={item}
                            showDetails={() => showDetails(item.id)}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Page;