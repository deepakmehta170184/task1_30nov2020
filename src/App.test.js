import { render, screen } from '@testing-library/react';
import App from './App';
import MovieList from './component/MovieList';

import { shallow } from 'enzyme';

describe('Test App.js', () => {
	it('should check if app component render without crashing',()=>{
		shallow(<App />);
	});
	it('should check for component MovieList renders', () => {
		const wrapper = shallow(<App />);
		const MovieListComponent = wrapper.find(MovieList);
		expect(MovieListComponent.exists()).toBe(true);
	});
});
