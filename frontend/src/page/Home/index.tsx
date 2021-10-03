import './styles.css';

import { animations } from 'assets/animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/images/landing.svg';

const Landing: React.FC = () => {
  return (
    <>
      <motion.div
        initial="initial"
        animate="final"
        exit="exit"
        variants={animations.opacity}
      >
        <div id="page-landing">
          <div className="container">
            <div className="logo-container">
              <h1>Student</h1>
              <h2>Sua plataforma de <br /> alunos online.</h2>
              <div className="buttons-container">
                <Link to="/student/list" className="study">
                  Entrar
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
      </motion.div>
    </>
  );
}

export default Landing;