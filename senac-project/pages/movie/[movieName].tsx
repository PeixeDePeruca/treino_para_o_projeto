import styles from "@/styles/movie.module.css";

export default function page({ movieName }:any) {

    return (
        <main>
            <div className={styles.container}>
                <p>Filme selecionado: {movieName}</p>               
                 </div>
        </main>
    );
}

export function getServerSideProps( context:any ) {
    const { movieName } = context.query;

    return {
        props: {
            movieName
        }
    }
}