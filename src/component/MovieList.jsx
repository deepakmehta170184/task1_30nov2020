import React, { useState } from 'react';
import _ from 'lodash';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button } from 'react-bootstrap';
const MovieList = (props) => {
	const [movie, setMovie] = useState('');
	const [rating, setRating] = useState('');
	const [finalMovieList, setFinalList] = useState([]);
	const [errorMsg, setErrorMsg] = useState(false);

	const handleSubmit = () => {
		if (movie && rating) {
			const movieListObj = _.concat(finalMovieList, {
				movie: movie,
				rating: rating,
			});

			setFinalList(movieListObj);
			setErrorMsg('');
		} else {
			if (_.isNil(movie)) setErrorMsg('No movie name provided.');
			else {
				setErrorMsg('No rating is provided.');
			}
		}
	};

	const closeErrorAlert = () => {
		setErrorMsg('');
	};

	return (
		<div className='main-div'>
			{errorMsg ? (
				<div className='alert alert-danger alert-dismissible'>
					<a
						href='#'
						className='close'
						data-dismiss='alert'
						aria-label='close'
						onClick={() => closeErrorAlert()}
					>
						&times;
					</a>
					<strong>{errorMsg}</strong>
				</div>
			) : null}
			<form>
				<h1 className='h1-ele' id='title'>
					Movie List
				</h1>
				<div className='movieDiv'>
					<span className='spanLayout'>
						<label>Movie Name:</label>{' '}
						<input
							type='text'
							id='movieName'
							name='movieName'
							onChange={(e) => setMovie(e.target.value)}
						/>
					</span>
					<span className='spanLayout'>
						<label>Rating:</label>{' '}
						<input
							type='number'
							min='1'
							max='5'
							id='rating'
							name='rating'
							onChange={(e) => setRating(e.target.value)}
						/>
					</span>
					<span className='spanLayout'>
						<Button id='addMovie' onClick={() => handleSubmit()}>
							Submit
						</Button>
					</span>
				</div>
			</form>

			<div className='details-box'>
				{finalMovieList.length > 0 ? (
					<div className='gridlist'>
						<Table size='sm'>
							<thead>
								<tr>
									<th className='th-ele'>Movie</th>
									<th className='th-ele'>Rating</th>
								</tr>
							</thead>
							<tbody>
								{_.map(finalMovieList, (obj, i) => {
									return (
										<tr key={i}>
											<td>{obj.movie}</td>
											<td>{obj.rating}</td>
										</tr>
									);
								})}
							</tbody>
						</Table>
					</div>
				) : (
					<div>
						<span className='noMovieList'>No Movie List Added</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default MovieList;
