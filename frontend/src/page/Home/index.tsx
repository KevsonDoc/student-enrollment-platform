import './styles.css';

import { Link } from 'react-router-dom';

import studyIcon from '../../assets/images/icons/study.svg';
import landingImg from '../../assets/images/landing.svg';

function Landing() {
  return (
    <>
      <div id="page-landing">
        <div className="container">
          <div className="logo-container">
            <h1>Student</h1>
            <h2>Sua plataforma de <br /> alunos online.</h2>
            <div className="buttons-container">
              <Link to="/student/add" className="study">
                <img src={studyIcon} alt="Estudar"/>
                Estudar
              </Link>
            </div>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>
      </div>
    </>
  );
}

export default Landing;