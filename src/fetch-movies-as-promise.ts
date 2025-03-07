import { Movie } from './movies';

export function fetchMoviesAsPromises(): Promise<Array<Movie>> {
	let moviesURL = 'http://localhost:5500/movies';

	let responsePromise = fetch(moviesURL);

	let moviesPromise = responsePromise.then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	});

	let moviesPromiseWithErrorHandling = moviesPromise.catch((error) => {
		console.error('Could not fetch movie data because', error);
		throw error;
	});

	return moviesPromiseWithErrorHandling;
}

export function fetchMoviesAsChainedPromises(): Promise<Array<Movie>> {
	let moviesURL = 'http://localhost:5500/movies';

	return fetch(moviesURL)
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				throw new Error(`Bad response: ${response.status}`);
			}
		})
		.catch((error) => {
			console.error('Could not fetch movie data because', error);
			throw error;
		});
}
