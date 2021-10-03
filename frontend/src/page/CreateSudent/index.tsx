import './styles.css';

import {
  ChangeEvent,
  MouseEvent,
  useState,
} from 'react';

import warmingIcon from 'assets/images/icons/warning.svg';
import Input from 'components/Input';
import { useHistory } from 'react-router-dom';
import api from 'services/api';
import { validationEmail } from 'util/scripts';

type StudentTypes = {
  name: string;
  email: string;
  cpf: string;
}

interface ApiTypes extends StudentTypes {
  message: string;
}

function FormStudent() {
  const history = useHistory();
  const [ formData, setFormData ] = useState<StudentTypes>({
    name: "",
    email: "",
    cpf: "",
  });

  function handleInput (event: ChangeEvent<HTMLInputElement>) {
    let { value, name} = event.target;

    setFormData({...formData, [name]: value });
  }

  async function submitStudent(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (!formData.name)
      return alert('prenncha o campo de nome');
    
    if (!formData.email || !validationEmail(formData.email))
      return alert('E-mail inválido');
    
    if (!formData.cpf || formData.cpf.length >= 12 || formData.cpf.length <= 10)
      return alert('CPF inválido');

      try {
        const response = await (await api.post('/', formData)).data as ApiTypes;
        alert(response.message);
        console.log(response.message)
        history.push('/student/list');
      } catch (error) {
        alert('Houve um erro interno');
      }
  }

  return (
    <div id="page-teacher-form" className="container">
      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value={formData.name}
              onChange={handleInput}
            />
            <Input
              name="email"
              label="E-mail"
              value={formData.email}
              onChange={handleInput}
            />
            <Input
              name="cpf"
              label="CPF"
              value={formData.cpf}
              onChange={handleInput}
            />
          </fieldset>

          <footer>
            <p>
              <img src={warmingIcon} alt="Aviso importante"/>
              Importante! <br />
              Prenncha todos os dados
            </p>
            <button type="submit" onClick={submitStudent}>
              Criar Aluno
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default FormStudent;