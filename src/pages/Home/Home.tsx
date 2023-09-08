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
                                <a href="">Search a player</a>
                                <a href="">Votre historique</a>
                                <a href="">Votre compte</a>
                                <a href="">A propos</a>
                                <a href="">Se déconnecter</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home