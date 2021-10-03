import './styles.css';

import {
  useEffect,
  useState,
} from 'react';

import { animations } from 'assets/animation';
import StudentItem from 'components/StudentItem';
import { motion } from 'framer-motion';
import api from 'services/api';
import { StudentTypes } from 'types/types';

const ListStudent: React.FC = () => {
  const [ student, setStudent ] = useState<StudentTypes[]>();

  
  useEffect(() => {
    async function getStudentData() {
      const response = await api.get('/');
      setStudent(response.data);
    }
    
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
              <StudentItem
                key={item.matricula}
                name={item.name}
                cpf={item.cpf}
                email={item.email}
                matricula={item.matricula}
              />
            )
          })
        }
      </section>
    </motion.main>
  )
}

export default ListStudent;