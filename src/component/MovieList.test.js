import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';
import { Button, Table } from 'react-bootstrap';
import { shallow } from 'enzyme';

describe('Test movieList component', () => {
	it('should render correct title for the page', () => {
		const wrapper = shallow(<MovieList />);
		const h1Tag = wrapper.find('h1');
		const result = h1Tag.text();

		expect(result).toBe('Movie List');
	});

	it('should successfully load the form', () => {
		const wrapper = shallow(<MovieList />);
		const form = wrapper.find('form');
		expect(form.exists()).toBe(true);
	});

	// it('should successfully load the table', () => {
	// 	const wrapper = shallow(<MovieList />);
	// 	const tableComponent = wrapper.find('Table');
	// 	expect(tableComponent).toBeTruthy();
	// });

	it('Test click event', () => {
		const mockCallBack = jest.fn();
		const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
		button.find('button').simulate('click');
		expect(mockCallBack.mock.calls.length).toEqual(1);
	});

	it('should display n number of rows for n number of data in the state', () => {
		const wrapper = shallow(<MovieList />);
		const movieLength = wrapper.find('finalMovieList').length;
		expect(wrapper.find('Table')).toHaveLength(movieLength);
	});

	it('should not render table if no data entered for movie list', () => {
		const wrapper = shallow(<MovieList />);
		const movieLength = wrapper.find('finalMovieList').length;
		expect(movieLength).toEqual(0);
		const tableComponent = wrapper.find('Table');
		expect(tableComponent.exists()).toBe(false);
	});
});
