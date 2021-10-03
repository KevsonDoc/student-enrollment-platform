import './styles.css';

import warmingIcon from 'assets/images/icons/warning.svg';
import Input from 'components/Input';

function FormStudent() {
  return (
    <div id="page-teacher-form" className="container">
      <main>
        <form>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              name="name"
              label="Nome completo"
              value="sadasd"
            />
            <Input
              name="E-mail"
              label="Avatar"
              value="asdasd"
            />
            <Input
              name="cpf"
              label="CPF"
              value="sadasd"
            />
          </fieldset>

          <footer>
            <p>
              <img src={warmingIcon} alt="Aviso importante"/>
              Importante! <br />
              Prenncha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default FormStudent;