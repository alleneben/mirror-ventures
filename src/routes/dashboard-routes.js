import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import { Tickets, Donate, Watch } from '../pages';


const DashboardRoutes = (props) => {

  return (
    // <div className="inner-route">
      <Switch>
        {/* All the routes and their component to render goes here as shown below */}
        {/* <Route exact path="/app/dashboard" component={Dashboard} {...props}/> */}
        <Route exact path="/app/dashboard/watch" component={Watch} {...props}/>
        <Route exact path="/app/dashboard/tickets" component={Tickets} {...props}/>
        <Route exact path="/app/dashboard/donate" component={Donate} {...props}/>
        {/* <Route exact path="/app/dashboard/settings" component={Video} {...props}/> */}
        {/* <Route exact path="/app/dashboard/about" component={Video} {...props}/> */}
        {/* <Route exact path="/app/dashboard/contact" component={Video} {...props}/> */}
        
        <Route
          path=""
          render={props => {
            return <h5>Page Not Found. It is under development</h5>;
              /* component goes here. { ...props can be passed to the component to get access 
                to the history, location and match as props }*/
                
          }}
        />
      </Switch>
    // </div>
  );
};

// withRouter will give us access to history, location
// and match as props to the component rendered according
// to the Route path so that it can redirect the user
// with for example this.props.history.push
export default withRouter(DashboardRoutes);
