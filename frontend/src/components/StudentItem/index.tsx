import './styles.css';

import { Link } from 'react-router-dom';

const StudentItem: React.FC = () => {
  return (
      <>
        <article className="teacher-item">
          <header>
            <div>
              <h1>Kevson Filipe</h1>
            </div>
          </header>
          <div className="main-student">
            <p>CPF: 873265897246245</p>
            <p>Matrícula: 123123 </p>
            <p>
              Email: <a href="">kevson@gmail.com</a>
            </p>
          </div>
          <footer>
            <Link to="/student/update" >Editar</Link>
            <button>Excluir</button>
          </footer>
        </article>
      </>
  );
}

export default StudentItem;