import './styles.css';

import {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useState,
} from 'react';

import warmingIcon from 'assets/images/icons/warning.svg';
import Input from 'components/Input';
import {
  useHistory,
  useParams,
} from 'react-router-dom';
import api from 'services/api';
import { StudentTypes } from 'types/types';
import { validationEmail } from 'util/scripts';

const UpdateStudent: React.FC = () => {
  const { matricula } = useParams<{matricula?: string}>();
  const history = useHistory();
  const [ formData, setFormData ] = useState({
    name: "",
    email: "",
  });

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    let { name, value } = event.target;
    setFormData({...formData, [name]: value})
  }

  async function updateStudent(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!formData.name)
      return alert('Prenncha o campo de nome');
    
    if (!formData.email || !validationEmail(formData.email))
      return alert('E-mail inválido');

    try {
      const response = await api.put(`/${matricula}`, formData);
      if (response.status >= 400)
        return alert(response.data)

      history.push('/student/list')
    } catch (error) {
      console.log(error)
      alert('Houve um erro interno não se preucupe estamos consertando');
    }
  }

  useEffect(() => {
    async function getStudent() {
      try {
        const response = await api.get<StudentTypes>(`/${matricula}`);
        if (response.status === 404)
          return history.push('/');

        setFormData({ name: response.data.name, email: response.data.email });
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
              label="Nome Completo"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />

            <Input
              label="E-mail"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warmingIcon} alt="Aviso importante"/>
              Importante! <br />
              Prenncha todos os dados
            </p>
            <button type="submit" onClick={updateStudent}>
              Editar Aluno
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default UpdateStudent;