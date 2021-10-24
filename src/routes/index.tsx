import React from 'react';
import { Background } from '../components/Background';
import { SignIn } from '../screens/SignIn';
// import { SignUp } from '../screens/SignUp';

export function Routes() {
	return (
		<Background>
			<SignIn />
		</Background>
	);
}
