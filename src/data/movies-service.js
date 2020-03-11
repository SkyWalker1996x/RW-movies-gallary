class MoviesService {
    _API_URL = "https://api.themoviedb.org/3";
    _API_GET_MOVIES = "/discover/movie";
    _API_KEY_3 = "3f4ca4f3a9750da53450646ced312397";
    _API_KEY_4 =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjRjYTRmM2E5NzUwZGE1MzQ1MDY0NmNlZDMxMjM5NyIsInN1YiI6IjVhYzlmNWRkOTI1MTQxNjJhZTA1Njk0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Fc4f9DVB6pFWh6hIjYe0NCC4pImdmNzDIfi_3Nb3tC4";
    _IMG_URL = "https://image.tmdb.org/t/p/w500";

    getResource = async (sort_by) => {
        const res = await fetch(`${this._API_URL}${this._API_GET_MOVIES}?api_key=${this._API_KEY_3}&sort_by=${sort_by}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._API_URL}` +
                `, received ${res.status}`)
        }

        const data = await res.json();

        return data.results
    }
}

export default MoviesService;
