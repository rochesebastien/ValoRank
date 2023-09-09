import { Link } from "react-router-dom";
import './Home.css'

function Home() {
    return (
        <>
            <div>
                <section className="page">
                    <div className="homepage_ctn">
                        <div className="homepage_col">
                            <div className="homepage_logo">
                                <img src="/nav_icon.png" alt="Valorank" />
                            </div>
                            <div className="homepage_btns">
                                <Link to="/search">Rechercher un joueur</Link>
                                <Link to="/history">Votre historique</Link>
                                <Link to="/search">A propos</Link>
                                {/* <a href="">Votre compte</a> */}
                                {/* <a href="">Se déconnecter</a> */}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home