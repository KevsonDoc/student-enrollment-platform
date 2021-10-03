import './styles.css';

import { useEffect } from 'react';

import warmingIcon from 'assets/images/icons/warning.svg';
import Input from 'components/Input';
import {
  useHistory,
  useParams,
} from 'react-router-dom';
import api from 'services/api';

const UpdateStudent: React.FC = () => {
  const { matricula } = useParams<{matricula?: string}>();
  const history = useHistory();

  useEffect(() => {
    async function getStudent() {
      try {
        const response = await api.get(`/${matricula}`);
        if (response.status === 404)
          return history.push('/');
      } catch (error) {
        alert('Houve um error interno');
        history.push('/')
      }
    }

    getStudent();
  }, [matricula, history]);

  if (!matricula) {
    return (
      <>
          <div id="page-teacher-form" className="container">
            <h1>Página não encontra</h1>
          </div>
      </>
    );
  }

  return (
    <div id="page-teacher-form" className="container">
      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome Completo"
              value="sadasd"
            />
            <Input
              name="E-mail"
              label="E-mail"
              value="asdasd"
            />
          </fieldset>

          <footer>
            <p>
              <img src={warmingIcon} alt="Aviso importante"/>
              Importante! <br />
              Prenncha todos os dados
            </p>
            <button type="submit">
              Editar Aluno
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default UpdateStudent;