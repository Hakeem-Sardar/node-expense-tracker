import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../screens/home/home';
import { LogIn } from '../screens/Login/LogIn';
import { SignUp } from '../screens/signup/SignUp';
import { GlobalProvider } from '../context/AppState';



export const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact>
			<GlobalProvider>
				<LogIn />
			</GlobalProvider>
			</Route>
			<Route path='/Home'>
			<GlobalProvider>
				<Home />
			</GlobalProvider>
			</Route>
			<Route path='/SignUp' component={SignUp} />
		</Switch>
	);
};
