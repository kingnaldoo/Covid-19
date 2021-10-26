import React, { createContext, ReactNode, useState } from "react";

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
}

export const AuthContext = createContext({} as UserContextProps)

export function UserContextProvider({children}: AuthProviderProps) {
	const [user, setUser] = useState<User>({} as User)

	return(
		<AuthContext.Provider value={{user, setUser}}>
			{children}
		</AuthContext.Provider>
	)
}
