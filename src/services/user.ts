import { AxiosResponse } from "axios";
import { api } from "./api";
import { User } from "../contexts/authContext";

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

export async function signIn({ email, password }: SignInProps): Promise<SignInResponseProps> {
	const signInResponse: AxiosResponse = await api.post('/sessions/login', {
		email,
		password
	})

	return signInResponse.data;
}

export async function signUp({ name, email, password }: SignUpProps): Promise<SignUpResponseProps> {
	const signUpResponse: AxiosResponse = await api.post('/users', {
		name,
		email,
		password
	})

	return signUpResponse.data;
}
