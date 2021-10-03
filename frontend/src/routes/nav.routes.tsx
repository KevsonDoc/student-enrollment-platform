import NavStudent from 'components/Nav';
import Form from 'page/Form';
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
      </Switch>
    </>
  )
}

export default NavRoutes;