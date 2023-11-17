import styles from '@/styles/login.module.css';
 
export default function loginPage() {
    return(
        <main className={`flex min-h-screen`}>
            <form className={styles.formulario}>
                <div className={styles.form_container}>
                    <h1 className={styles.title}>Sistema</h1>
 
                    <input type="email" placeholder="Email" min={9} max={64} required />
                    <br />
 
                    <input type="password" placeholder="Senha" min={6} max={32} required />
 
                    <button className={styles.form_btn}>Enviar</button>
                </div>
            </form>
        </main>
 
    )
}