import React, { createContext, ReactNode, useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

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
}

export const AuthContext = createContext({} as UserContextProps)

export function UserContextProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<User>({} as User);
	const [token, setToken] = useState('');

	useEffect(() => {
		async function verifySignIn() {
			const authData = await AsyncStorage.getItem('AUTH_DATA')
			if (authData) {
				setUser(JSON.parse(authData).user);
				setToken(JSON.parse(authData).token)
			}
		}

		verifySignIn()
	}, [])

	return (
		<AuthContext.Provider value={{ user, setUser, token, setToken }}>
			{children}
		</AuthContext.Provider>
	)
}
