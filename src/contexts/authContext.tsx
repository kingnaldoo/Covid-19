import React, { createContext, ReactNode, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AxiosResponse } from 'axios';

import { api } from '../services/api';

export type User = {
	id: number,
	name: string,
	email: string,
	created_at: string,
	updated_at: string
}

type AuthProviderProps = {
	children: ReactNode;
}

type UserContextProps = {
	user: User;
	setUser: (user: User) => void
	token: string;
	setToken: (token: string) => void
	handleSignIn: ({ email, password }: SignInProps) => Promise<SignInResponseProps>
	handleSignUp: ({ name, email, password }: SignUpProps) => Promise<SignUpResponseProps>
	handleSignOut: () => void
}

type SignInProps = {
	email: string;
	password: string;
}

type SignInResponseProps = {
	user: User;
	token: string;
}

type SignUpProps = {
	name: string;
	email: string;
	password: string;
}

type SignUpResponseProps = {
	name: string
	email: string
	id: string
	created_at: string
	updated_at: string
}

export const AuthContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({} as User);
	const [token, setToken] = useState('');

	useEffect(() => {
		async function verifySignIn() {
			const authData = await AsyncStorage.getItem('AUTH_DATA');
			if (authData) {
				setUser(JSON.parse(authData).user);
				setToken(JSON.parse(authData).token);
			}
		}

		verifySignIn();
	}, []);

	async function handleSignIn({ email, password }: SignInProps): Promise<SignInResponseProps> {
		const signInResponse: AxiosResponse = await api.post('/sessions/login', {
			email,
			password
		});

		return signInResponse.data;
	}

	async function handleSignUp({ name, email, password }: SignUpProps): Promise<SignUpResponseProps> {
		const signUpResponse: AxiosResponse = await api.post('/users', {
			name,
			email,
			password
		});

		return signUpResponse.data;
	}

	async function handleSignOut() {
		await AsyncStorage.removeItem('AUTH_DATA');
		setUser({} as User);
	}

	return (
		<AuthContext.Provider value={{ user, setUser, token, setToken, handleSignIn, handleSignUp, handleSignOut }}>
			{children}
		</AuthContext.Provider>
	);
}
