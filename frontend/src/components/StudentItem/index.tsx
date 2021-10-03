import './styles.css';

import {
  Link,
  useHistory,
} from 'react-router-dom';
import api from 'services/api';
import { StudentTypes } from 'types/types';

const StudentItem: React.FC<StudentTypes> = ({ name, cpf, matricula, email }) => {
  const history = useHistory();

  async function deleteStudent() {
    try {
      const response = await api.delete(`/${matricula}`);

      if (response.status === 404 || 500)
        return alert(response.data) 
      
        alert(response.data);
        history.push('/');
    } catch (error) {
      alert('Houve um erro estamos consertando')
    }
  }

  return (
      <>
        <article className="teacher-item">
          <header>
            <div>
              <h1>{name}</h1>
            </div>
          </header>
          <div className="main-student">
            <p>CPF: {cpf}</p>
            <p>Matrícula: {matricula}</p>
            <p>
              Email: <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
          <footer>
            <Link to="/student/update" >Editar</Link>
            <button onClick={deleteStudent}>Excluir</button>
          </footer>
        </article>
      </>
  );
}

export default StudentItem;