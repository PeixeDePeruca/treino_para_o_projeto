import { createMovieModel, findMovieBynameModel, selectMoviesModel } from "../model/movie";

export async function createMovie(name:string, releasedate:string, imageURL:string) {
    try {
        const movieByName = await findMovieBynameModel(name);

        if ( movieByName != undefined ) {
            return { message: "Já tem esse filme doido,cadastre outro Movie" };
        }

        const response = await createMovieModel(name, releasedate, imageURL);
        return response;

    }
    catch (err) {
        return { message: "Something went errado :/ "};
    }
}

export async function selectMovies() {
    try {
        const movies = await selectMoviesModel();

        return movies;
        
    }
    catch(err) {
        return { message: "Something went wrong" }
    }
}