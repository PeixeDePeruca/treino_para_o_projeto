import styles from "@/styles/movie.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import imageMovie from '@/public/erro_noel.png';

export default function page({ movieName }: any) {

    const [movie, setMovie]: any = useState();
    const router = useRouter();

    async function fetchData() {

        try {
            const response = await fetch(`/api/action/movie/find?name=` + movieName, {
                method: 'GET'
            });

            const responseJson = await response.json();

            setMovie(responseJson);

        }
        catch (err: any) {
            alert(err.message);

        }
    }

    useEffect(() => {
        fetchData();

    }, []);

    return (
        <main>
            <div className={styles.container}>

                {movie != undefined ?

                    <div className={styles.page}>
                        <img src={imageMovie.src} className={styles.movieImage} />

                        <div className={styles.movieInfos}>

                            <p>Filme encontrado</p>
                            <p>Nome do filme: {movie.name} </p>
                            <p>Data de lançamento: {movie.releaseDate} </p>
                            {/* <p> {movie.created_at} </p>
                    <p> {movie.update_at} </p> */}
                        </div>

                    </div>

                    :
                    <div>
                        <p>Filme não encontrado.</p>
                    </div>


                }

            </div>

        </main>
    );
}

export function getServerSideProps(context: any) {
    const { movieName } = context.query;

    return {
        props: {
            movieName
        }
    }
}