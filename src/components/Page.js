import React from 'react';
import Movie from './Movie';
import './Page.scss';

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