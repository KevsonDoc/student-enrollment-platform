import './styles.css';

import {
  useEffect,
  useState,
} from 'react';

import { animations } from 'assets/animation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import api from 'services/api';
import { StudentTypes } from 'types/types';

const ListStudent: React.FC = () => {
  const [ student, setStudent ] = useState<StudentTypes[]>();

  async function getStudentData() {
    const response = await api.get('/');
    setStudent(response.data);
  }

  async function deleteStudent(matricula: string) {
    const response = await api.delete(`/${matricula}`);

    if (response.status === 404 || response.status === 500)
      return alert(response.data)

    getStudentData();
    alert('O aluno foi deletato')
  }
  
  useEffect(() => {
    getStudentData();
  }, []);

  return (
    <motion.main
    initial="initial"
    animate="final"
    exit="exit"
    id="list-student"
    variants={animations.opacity}
    >
      <section>
        {
          student?.map(item => {
            return (
              <article className="teacher-item" key={item.matricula}>
                <header>
                  <div>
                    <h1>{item.name}</h1>
                  </div>
                </header>
                <div className="main-student">
                  <p>CPF: {item.cpf}</p>
                  <p>Matrícula: {item.matricula}</p>
                  <p>
                    Email: <a href={`mailto:${item.email}`}>{item.email}</a>
                  </p>
                </div>
                <footer>
                  <Link to={`/student/update/${item.matricula}`} >Editar</Link>
                  <button onClick={() => {deleteStudent(item.matricula)}}>Excluir</button>
                </footer>
              </article>
            )
          })
        }
      </section>
    </motion.main>
  )
}

export default ListStudent;