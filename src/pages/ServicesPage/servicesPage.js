import style from './servicesPage.module.css'
import CardServices from '../../components/list/cards/CardServices';
import Domiciliar from '../../Img/casa-limpa.png'
import hospitalar from '../../Img/hospital.png'
import empresarial from '../../Img/companhia.png'
import acompanhamento from '../../Img/pranchetas.png'
import procedimentos from '../../Img/siringa.png'
import curativos from '../../Img/gesso.png'
import cursoDeCuidador from '../../Img/enfermeira.png'
import outrosServicos from '../../Img/mais.png'


function servicesPage() {

    return (
        <div className={style.servicesPageback}>
            <div className={style.content}>
                <CardServices logo={Domiciliar} title='Domiciliar'/>
                <CardServices logo={hospitalar} title='Hospitalar'/>
                <CardServices logo={empresarial} title='Empresarial'/>
                <CardServices logo={acompanhamento} title='Acompanhamento'/>
                <CardServices logo={procedimentos} title='Procedimentos'/>
                <CardServices logo={curativos} title='Curativos'/>
                <CardServices logo={cursoDeCuidador} title='Curso de Cuidador'/>
                <CardServices logo={outrosServicos} title='Outros'/>
            </div>
        </div>
    )
}

export default servicesPage;