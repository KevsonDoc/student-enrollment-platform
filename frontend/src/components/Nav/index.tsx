import './styles.css';

import home from 'assets/images/icons/home.svg';
import list from 'assets/images/icons/list.svg';
import add from 'assets/images/icons/plus-circle.svg';
import { Link } from 'react-router-dom';

const Nav: React.FC = () => {
  return (
    <nav>
      <Link to="/">
        <img src={home} alt="add" />
        Criar Aluno
      </Link>
      <Link to="/student/list">
        <img src={list} alt="add" />
        Listar Aluno
      </Link>
      <Link to="/student/add">
        <img src={add} alt="add" />
        Criar Aluno
      </Link>
    </nav>
  );
}

export default Nav;