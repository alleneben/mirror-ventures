import { Route, Switch } from 'react-router-dom';
import { SignIn, SignUp } from './pages';



const MainRouter = () => {


    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
    )
}

export default MainRouter;