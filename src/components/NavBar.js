import style from './NavBar.module.css';
import { useNavigate } from "react-router-dom";

function NavBar ({}) {
    const navigate = useNavigate();
    const goToHomePages = () => {
        navigate('./')
    };
    
    const goToServicesPages = () => {
        navigate('/services')
    };
    
    const goToContatePages = () => {
        navigate('/Contato')
    };

    return (
        <>
            <nav className={style.Navbar}>
                <ul className={style.ContentBar}>
                    <li className={style.ItenBar} onClick={goToHomePages}>Home</li>
                    <li className={style.ItenBar} onClick={goToServicesPages}>Serviços</li>
                    <li className={style.ItenBar} onClick={goToContatePages}>Contato</li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar;