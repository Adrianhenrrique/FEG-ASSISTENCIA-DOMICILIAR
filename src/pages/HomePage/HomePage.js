import logo from '../../favicon.ico';
import logoWhatsapp from '../../Img/whatsapp.png'
import logoWhatsapp2 from '../../Img/whatsapp-bnt.png'
import logoInstagram from '../../Img/instagram.png'

import './HomePage.css';
import Card from '../../components/Card'
import img from '../../Img/image01.jpg';
import img2 from '../../Img/escritorio.webp';
import img3 from '../../Img/feg-banner.webp';
import { useNavigate } from "react-router-dom";
import NavBar from '../../components/NavBar';

function HomePage() {
  const title1 = 'Equipe Multidisciplinar'
  const descript1 = 'Em nosso serviço de Home Care, contamos com uma equipe multidisciplinar altamente qualificada, dedicada a proporcionar cuidados personalizados e abrangentes no conforto do lar. Nossa equipe é composta por profissionais especializados em diversas áreas da saúde, unindo conhecimentos e experiências para garantir um atendimento integral e humanizado. '

  const title2 = 'Escritório Físico'
  const descript2 = ' Embora nossa principal atuação seja no conforto do lar, reconhecemos a importância de contar com um escritório físico estrategicamente localizado para oferecer suporte administrativo e coordenar eficientemente os serviços de Home Care. Nosso escritório é um centro de operações dedicado a garantir a excelência na prestação de cuidados. '

  const title3 = 'Sobre a F&G Home Care'
  const descript3 = ' A F&G Home Care é mais do que uma prestadora de serviços de saúde domiciliar; somos uma extensão do cuidado familiar, oferecendo assistência humanizada e personalizada no conforto do lar. Com uma equipe multidisciplinar altamente capacitada, dedicamo-nos a proporcionar cuidados clínicos excepcionais, reabilitação e suporte emocional, priorizando o bem-estar integral de cada paciente. Na F&G, nosso compromisso vai além da saúde física, abraçando a missão de enriquecer vidas e promover a independência, permitindo que nossos pacientes vivam plenamente em seus ambientes familiares. Confiabilidade, compaixão e excelência definem a essência da F&G Home Care, onde o seu bem-estar é a nossa prioridade. '

  const descrpit245 = ' Explore a excelência em cuidados domiciliares agendando uma reunião conosco, descubra como a qualidade e a dedicação da nossa equipe podem fazer a diferença no cuidado. Conforto e saúde são a nossa prioridade. ';
  
  const navigate = useNavigate();
  const goToServicesPages = () => {
      navigate('/services')
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="logo"/>
          <h1>F&G ASSISTÊNCIA DOMICILIAR</h1>
        </div>
        <NavBar />
      </header>
      <section className='Banner'>
      </section>
      <section className='scop'>
        <ul>
          <li>• Profissionais habilitados e de referência </li>
          <li>• Excelência no cuidado humanizado</li>
          <li>• Atendimento em todo o Brasil </li>
          <li>• Atendimento 24h</li>
        </ul>
        <a href='https://wa.me/5511914813191'target="_blank">
          <button className='bnt'>OBTER ORÇAMENTO</button>
        </a>
      </section>
      <section className='Infos'>
        <Card imagen={img} title={title1} descript={descript1}/>
        <Card imagen={img2} title={title2} descript={descript2} inverted/>
        <Card imagen={img3} title={title3} descript={descript3}/>
      </section>
      <section className='Extras'>
        <h1 className='title'>Agende uma reunião</h1>
        {/* <button  onClick={goToServicesPages}>test</button> */}
        <span></span>
        <p className='Descript'>{descrpit245}</p>
        <a href='https://wa.me/5511914813191'target="_blank">
          
          <button className='bnt2'> <img src={logoWhatsapp2}  className='icon'/>Envie uma mensagem</button>
        </a>
      </section>

      <footer className='HomePageFooter'>
        <div className='content'>
          <div className='contate'>
            <h2>Atendimento 24h:</h2>
            <p>
              <a href='tel:11914813191'>(11) 91481-3191</a>
              <br/><a href='tel:1130906043'>(11) 3090-6043</a>
              <br/>Seg a Sab 07:00 – 00:00 
              <br/>domingo Por compromisso
            </p>
          </div>
          <div className='socialMedia'>
            <h2>Redes social</h2>
            <div>
              <a className='social' href='https://www.instagram.com/fg.homecare?igsh=MTVsOXlra3JuZGlyMQ==' target="_blank">
                <img src={logoInstagram} />
              </a>
            </div>
          </div>
        </div>
        <p className='reserved'>F&G ASSISTÊNCIA DOMICILIAR – Todos os direitos reservados.<br/>CNPJ: 53.504.231/0001-07ㅤㅤㅤㅤㅤCopyright © 2024<br/><br/>Feito com <span>&hearts;</span><br/><span className='editorName'>Feitor por Adrian Henrique</span> </p>
      </footer>

      <a className='link' href='https://wa.me/5511914813191' target="_blank">
        <div className="whatsapp">
          <img src={logoWhatsapp} alt="logo do whatsapp"/>
        </div>
      </a>
    </div>
  );
}

export default HomePage;
