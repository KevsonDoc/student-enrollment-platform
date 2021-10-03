import NavStudent from 'components/Nav';
import Form from 'page/Form';
import ListStudent from 'page/ListStudent';
import UpdateStudent from 'page/UpdateStudent';
import {
  Route,
  Switch,
} from 'react-router-dom';

const NavRoutes: React.FC = () => {
  return (
    <>
      <NavStudent />
      <Switch>
        <Route path="/student/add">
          <Form />
        </Route>
        <Route path="/student/list">
          <ListStudent />
        </Route>
        <Route path="/student/update">
          <UpdateStudent />
        </Route>
      </Switch>
    </>
  )
}

export default NavRoutes;