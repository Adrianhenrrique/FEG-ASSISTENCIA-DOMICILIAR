import style from './servicesPage.module.css'
import CardServices from '../../components/list/cards/CardServices';
import Domiciliar from '../../Img/casa-limpa.png'
import Domiciliar2 from '../../Img/domiciliar.jpg'
import hospitalar from '../../Img/hospital.png'
import hospitalar2 from '../../Img/hospitalar.jpg'
import empresarial from '../../Img/companhia.png'
import empresarial2 from '../../Img/empresa.jpg'
import acompanhamento from '../../Img/pranchetas.png'
import acompanhamento2 from '../../Img/acompanhamento.jpg'
import procedimentos from '../../Img/siringa.png'
import curativos from '../../Img/gesso.png'
import cursoDeCuidador from '../../Img/enfermeira.png'
import outrosServicos from '../../Img/mais.png'


function servicesPage() {

    return (
        <div className={style.servicesPageback}>
            <div className='ItenEmpty'></div>
            <div className={style.content}>
                <div className={style.Iten}>
                    <CardServices backgroudImager={Domiciliar2} logo={Domiciliar} title='Domiciliar'/>
                </div>
                <div className={style.Iten}>
                    <CardServices backgroudImager={hospitalar2} logo={hospitalar} title='Hospitalar'/> 
                </div>
                <div className={style.Iten}>
                    <CardServices backgroudImager={empresarial2} logo={empresarial} title='Empresarial'/>
                </div>
                <div className={style.Iten}>
                    <CardServices backgroudImager={acompanhamento2} logo={acompanhamento} title='Acompanhamento'/>
                </div>
                <div className={style.Iten}>
                    <CardServices logo={procedimentos} title='Procedimentos'/>
                </div>
                <div className={style.Iten}>
                    <CardServices logo={curativos} title='Curativos'/>
                </div>
                <div className={style.Iten}>
                    <CardServices logo={cursoDeCuidador} title='Curso de Cuidador'/>
                </div>
                <div className={style.Iten}>
                    <CardServices logo={outrosServicos} title='Outros'/>
                </div>
            </div>
            <div className='ItenEmpty'></div>
        </div>
    )
}

export default servicesPage;