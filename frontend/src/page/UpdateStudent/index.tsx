import './styles.css';

import warmingIcon from 'assets/images/icons/warning.svg';
import Input from 'components/Input';

const UpdateStudent: React.FC = () => {
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