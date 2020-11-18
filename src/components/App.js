import '../App.css';
import { Grid } from '@material-ui/core'
import Home from '../components/pages/Home'
import Welcome from '../components/pages/welcome/Welcome'
import Navbar from '../components/layout/Navbar'
import UserLocationState from '../context/userLocation/UserLocationState'
import { BrowserRouter as Router,
         Switch,
         Route,
         Link
} from 'react-router-dom'

function App() {
  return (
        <Router>
          <div className="App">
            <UserLocationState>
              <Grid container direction='column'>
                <Grid item xs={12}>
                  <Navbar/>
                </Grid>
                <Grid container item direction='row'>
                  <Grid item xs={1}/>
                  <Grid item xs={10}>
                    <Switch>
                      <Route path='/home' component={Home}/>
                      <Route path='/' component={Welcome}/>
                    </Switch>
                  </Grid>
                  <Grid item xs={1}/>
                </Grid>
              </Grid>
            </UserLocationState>
          </div>
        </Router>
  );
}

export default App;
