import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import { Home, Browse, Signup, Signin } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

function App() {

  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>
        <IsUserRedirect user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>

        <IsUserRedirect user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>

        <ProtectedRoute user={user}
          path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>

        <Route to={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
