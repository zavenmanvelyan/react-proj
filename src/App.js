import React from 'react';
import { connect } from "react-redux";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";
import './App.css';
import Preloader from "./components/Common/Preloader/Preloader";
import HeaderContainer from './components/Header/HeaderContainer';
import Login from "./components/Login/Login";
import Navbar from './components/Navbar/Navbar';
import UsersContainer from "./components/Users/UsersContainer";
import { initializeApp } from "./redux/app-reducer";
import store from './redux/redux-store';
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { withSuspense } from './HOC/withSuspense';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (this.props.initialized === false) {
            return <Preloader />;
        } else {
            return (
                <div className='app-wrapper'>
                    <HeaderContainer />
                    <Navbar />
                    <div className='app-wrapper-content'>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)} />
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
                        <Route path="/users" render={() => <UsersContainer />} />
                        <Route path="/login" render={() => <Login />}></Route>
                    </div>
                </div>
            );
        }
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))
    (App);

let SamuraiJSApp = (props) => {
    return (<HashRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </HashRouter>)
}

export default SamuraiJSApp