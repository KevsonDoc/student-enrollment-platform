import { AnimatePresence } from 'framer-motion';
import Home from 'page/Home';
import {
  Route,
  Switch,
} from 'react-router-dom';

import NavRoutes from './nav.routes';

const Router: React.FC = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/student">
          <NavRoutes />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default Router;