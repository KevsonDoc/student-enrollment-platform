import './styles.css';

import list from 'assets/images/icons/list.svg';
import add from 'assets/images/icons/plus-circle.svg';

const Nav: React.FC = () => {
  return (
    <nav>
      <a href="">
        <img src={add} alt="add" />
        Criar Aluno
      </a>
      <a href="">
        <img src={list} alt="add" />
        Listar Aluno
      </a>
    </nav>
  );
}

export default Nav;