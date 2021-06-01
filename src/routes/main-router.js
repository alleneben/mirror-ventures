import { Route, Switch, withRouter } from 'react-router-dom';
import { SignIn, SignUp } from '../pages';
import { DashboardLayout } from '../layouts/dashboard-layout-container'



const MainRouter = () => {


    return(
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/app/dashboard" component={DashboardLayout} />
        </Switch>
    )
}

export default withRouter(MainRouter);