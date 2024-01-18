import NavBar from '../NavBar';
import style from './Header.module.css'

function Header({logo}) {
    return(
        <>
            <header className={style.appHeader}>
                <div className={style.contentHeader}>
                    <img src={logo} className={style.logo}/>
                    <h1>F&G ASSISTÊNCIA DOMICILIAR</h1>
                </div>
                <NavBar />
            </header>
        </>
    )
}

export default Header;