import styles from '@/styles/register.module.css';

export default function registerPage() {

    return (
        <main className={`flex min-h-screen`}>
            <form className={styles.formulario}>
                <div className={styles.form_container}>
                <input type="text" placeholder="Digite o seu nome" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="text" placeholder="Usuário" />
                <br />  
                <input type="password" placeholder="Senha" />
                <br />
                <input type="password" placeholder="Confirmação de Senha" />
                <br />

                <button className={styles.form_btn}>Enviar</button>
                </div>
            </form>
        </main>
    );
}