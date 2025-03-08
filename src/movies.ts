// Placeholder
/*
To start:
title
genre
length
year

Soon:
Actors
rating (how many stars)
restriction (PG, PG-13)
*/

export interface Movie {
	id: string;
	title: string;
	// genres?: Array<string>; // Maybe an enum later?
	genres?: Array<Genres>; // Maybe an enum later?
	length?: number; // int for number of minutes
	year?: number; // int for year number
}

type InputMovie = Omit<Movie, 'id'>;

/*
Movies DB < - > Movies REST Server < - > JSON Data (no enums!) < - > Our code on the client
*/

enum Genres {
	Fantasy = 'Fantasy',
	Musical = 'Musical',
	Animation = 'Animation',
	Thriller = 'Thriller',
	Crime = 'Crime',
	Disney = 'Disney',
	FairyTale = 'Fairy Tale',
	VideoGame = 'Video Game',
}

function renderToGrid(target: Element, movies: Array<Movie>) {
	/*
	Input is a Movie object
	Output is 
				<div class="movie-row">
					<div class="movie-title">Wicked</div>
					<div class="movie-genre">Fantasy</div>
					<div class="movie-year">2024</div>
					<div class="movie-length">160</div>
				</div>
	Then append the rows to the target
	*/

	let rows = movies.map((movie) => {
		let row = document.createElement('div');
		row.classList.add('movie-row');
		row.insertAdjacentHTML('beforeend', `<div class="movie-title">${movie.title}</div>`);
		row.insertAdjacentHTML(
			'beforeend',
			`<div class="movie-genre">${movie.genres?.join(', ')}</div>`
		);
		row.insertAdjacentHTML('beforeend', `<div class="movie-year">${movie.year}</div>`);
		row.insertAdjacentHTML('beforeend', `<div class="movie-length">${movie.length}</div>`);
		return row;
	});

	// Add all the rows to .movies-grid at once
	target.append(...rows);
}

async function fetchMovies(): Promise<Array<Movie>> {
	try {
		let moviesURL = 'http://localhost:5500/movies';
		let response = await fetch(moviesURL);

		if (response.ok) {
			let movies = (await response.json()) as Array<Movie>;
			return movies;
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error('Could not fetch movie data because', error);
		throw error;
	}
}

async function init() {
	console.log('Inside init(), about to call fetchMovies()');
	let movies = await fetchMovies();
	console.log('Inside init(), finished calling fetchMovies()');

	let moviesGrid = document.querySelector('.movies-grid');
	if (moviesGrid) {
		renderToGrid(moviesGrid, movies);
	}
}

async function handleFormData(event: Event) {
	// Capture form data
	event.preventDefault();
	let data = new FormData(event.target as HTMLFormElement);
	let almostMovie: InputMovie = { title: '' };
	for (let [field, value] of data.entries()) {
		if (typeof value === 'string') {
			if (field === 'genres') {
				almostMovie[field] = [value as Genres];
			} else {
				// @ts-ignore
				almostMovie[field as keyof InputMovie] = value;
			}
		}
	}

	// Send to the server
	await addMovie(almostMovie);

	// Re-request movies list
	let updatedMovies = await fetchMovies();

	// Re-render movies list
	let moviesGrid = document.querySelector('.movies-grid');
	if (moviesGrid) {
		renderToGrid(moviesGrid, updatedMovies);
	}
}

async function addMovie(movie: InputMovie) {
	try {
		let response = await fetch('http://localhost:5500/movies', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(movie),
		});

		if (response.ok) {
			let addedMovie = (await response.json()) as Movie;
			return addedMovie;
		} else {
			throw new Error(`Bad response: ${response.status}`);
		}
	} catch (error) {
		console.error(`Could not add ${movie.title} because`, error);
		throw error;
	}
}

console.log('Before calling init()');
init();
console.log('After calling init();');

let form = document.querySelector('.add-movie-form');
if (form) {
	form.addEventListener('submit', handleFormData);
}
