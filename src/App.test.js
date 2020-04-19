import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';
import Api from './services/Api';
import Page from './components/Page';

jest.mock('axios');

const movies = [{
    id: 12345,
    poster_path: '/abc.jpg',
    release_date: '2016-01-01',
    original_title: 'Cool Movie'
},
{
    id: 67890,
    poster_path: '/def.jpg',
    release_date: '2016-10-10',
    original_title: 'blah'
}];

test('renders the movie page on first load', () => {
    const { getByText, container } = render(<App />);
    const pageTitle = getByText(/Top Movies from 2016/i);

    expect(pageTitle).toBeInTheDocument();
    expect(container.firstChild.className).toEqual('app ');
});

test('renders the movie items when the api succeeds', async () => {
    const resp = { data: { results: movies } };
    axios.get.mockResolvedValue(resp);

    const data = await Api.getMoviesWithQuery('');
    expect(data.results).toEqual(movies);
});

test('renders the detail view when show details is clicked', async () => {
    const mockShowDetails = (id) => id;
    const { queryByAltText, container, getAllByText } = render(
        <Page items={movies} showDetails={(id) => mockShowDetails(id)} />
    );

    const detailButton = getAllByText(/show details/i)[0];
    fireEvent.click(detailButton);

    const imageAlt = queryByAltText(/cool movie/i);

    expect(container.firstChild.className).toEqual('page-container');
    expect(imageAlt).toBeInTheDocument();
});