import NavBar from '../NavBar';
import NavBarMobile from '../NavBarMobile';
import style from './Header.module.css'
import { useMediaQuery } from '@chakra-ui/react'

function Header({logo}) {

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

    return(
        <>
            <header className={style.appHeader}>
                <div className={style.contentHeader}>
                    <img src={logo} className={style.logo}/>
                    <h1>F&G ASSISTÊNCIA DOMICILIAR</h1>
                </div>
                {isLargerThan800 ? <NavBar/> : <NavBarMobile/>}
            </header>
        </>
    )
}

export default Header;