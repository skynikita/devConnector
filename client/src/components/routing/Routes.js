import React from 'react'
import Alert from "../layout/Alert";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../layout/NotFound";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Profiles from "../profiles/Profiles";
import Profile from "../profileDetails/Profile";
import Dashboard from "../dashboard/Dashboard";
import CreateProfile from "../profile/CreateProfile";
import EditProfile from "../profile/EditProfile";
import AddExperience from "../profile/AddExperience";
import AddEducation from "../profile/AddEducation";
import Posts from "../posts/Posts";
import Post from "../post/Post";

const Routes = () => {
    return(
        <section className='container'>
            <Alert />
            <Switch>
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:id" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute exact path="/create-profile" component={CreateProfile} />
                <PrivateRoute exact path="/edit-profile" component={EditProfile} />
                <PrivateRoute exact path="/add-experience" component={AddExperience} />
                <PrivateRoute exact path="/add-education" component={AddEducation} />
                <PrivateRoute exact path="/posts" component={Posts} />
                <PrivateRoute exact path="/posts/:id" component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>
    )
}

export default Routes
