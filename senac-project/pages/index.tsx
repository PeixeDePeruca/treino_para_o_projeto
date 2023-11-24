import { checkToken } from "@/services/tokenConfig";
import { deleteCookie, getCookie } from "cookies-next";
import styles from "@/styles/home.module.css";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();

  function logout() {
    deleteCookie('authorization');

    router.push(`/user/login`)
  }


  return (
    <main>
      <nav className={styles.navBar}> 

        <button className={styles.btnLogout} onClick={logout}>Logout</button>
      </nav>

      <div className={styles.container}>

      {/* // Exemplo de DIV para os cards */}
      <div className={styles.card}>

      </div>

      </div>
    </main>
  )
}

export function getServerSideProps({ req, res }: any) {
  try {
    const token = getCookie('authorization', { req, res });
    if (!token) {
      throw new Error('Invalid Token');
    }

    checkToken(token);

    return {
      props: {}
    }

  }
  catch (err) {
    return {
      redirect: {
        permnanet: false,
        destination: '/user/login'
      },
      props: {}
    }
  }
}