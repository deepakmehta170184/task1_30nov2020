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

	it('should test click event', () => {
		const mockCallBack = jest.fn();
		const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
		button.find('button').simulate('click');
		expect(mockCallBack.mock.calls.length).toEqual(1);
	});

	it('should display n number of rows for n number of data in the state', () => {
		const wrapper = shallow(<MovieList />);
		const table = wrapper.find("Table");
		expect(table.exists()).toBe(false);

		const nmovieName1 = wrapper.find("#movieName");
		nmovieName1.simulate("change", { target: { value: "sarkar" } });
		const rating1 = wrapper.find("#rating");
		rating1.simulate("change", { target: { value: "4" } });

		const button1 = wrapper.find("Button");
		button1.simulate("click");
		wrapper.update();
		const Submit1 = wrapper.find(".tr-wrapper");
		expect(Submit1.exists()).toBe(true);
		expect(Submit1).toHaveLength(1);

		const movieName2 = wrapper.find("#movieName");
		movieName2.simulate("change", { target: { value: "sarkar2" } });
		const rating2 = wrapper.find("#rating");
		rating2.simulate("change", { target: { value: "3" } });

		const button2 = wrapper.find("Button");
		button2.simulate("click");
		wrapper.update();
		const Submit2 = wrapper.find(".tr-wrapper");
		expect(Submit2.exists()).toBe(true);
		expect(Submit2).toHaveLength(2);

	});

	it('should not render table if no data entered for movie list', () => {
		const wrapper = shallow(<MovieList />);
		const movieLength = wrapper.find('finalMovieList').length;
		expect(movieLength).toEqual(0);
		const tableComponent = wrapper.find('Table');
		expect(tableComponent.exists()).toBe(false);
	});

	it('should check if no data is provided and the button is clicked then no table is displayed. ', () => {
		const wrapper = shallow(<MovieList />);

		const movieName = wrapper.find('#movieName');
		movieName.simulate('change', { target: { value: '' } });
		const rating = wrapper.find('#rating');
		rating.simulate('change', { target: { value: '' } });

		const button = wrapper.find('Button');
		button.simulate('click');
		wrapper.update();
		const tableAfterSubmit = wrapper.find('.tr-wrapper');
		expect(tableAfterSubmit.exists()).toBe(false);
	});

	it('should render data table once user enters some text in input',()=>{
		const wrapper = shallow(<MovieList />);

		const movieName = wrapper.find('#movieName');
		movieName.simulate('change', { target: { value: 'KGF' } });
		const rating = wrapper.find('#rating');
		rating.simulate('change', { target: { value: '5' } });

		const button = wrapper.find('Button');
		button.simulate('click');
		wrapper.update();
		const tableAfterSubmit = wrapper.find('.tr-wrapper');
		expect(tableAfterSubmit.exists()).toBe(true);
	})
});
