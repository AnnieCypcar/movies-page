import React from 'react';
import './Page.scss';

const Page = ({ items }) => {
    return (
        <div className="movie-container">
            <title>Top Movies from 2016</title>
            {items.map((item) => {
                return (
                    <div key={item.id}>
                        <div>{item.original_title}</div>
                    </div>
                )
            })}
        </div>
    )
}
export default Page;