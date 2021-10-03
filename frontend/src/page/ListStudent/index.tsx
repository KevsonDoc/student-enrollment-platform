import './styles.css';

import { animations } from 'assets/animation';
import TeacherItem from 'components/StudentItem';
import { motion } from 'framer-motion';

const ListStudent: React.FC = () => {
  return (
    <motion.main
    initial="initial"
    animate="final"
    exit="exit"
    id="list-student"
    variants={animations.opacity}
  >
      <section>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />

      </section>
    </motion.main>
  )
}

export default ListStudent;