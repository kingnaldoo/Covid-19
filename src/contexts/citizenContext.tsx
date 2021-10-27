import React, { createContext, ReactNode, useState } from "react";
import { AxiosResponse } from "axios";
import { useAuth } from "../hooks/useAuth";
import { api } from "../services/api";

type CitizenProps = {
	name: string;
	cpf: string;
	birthDate: string;
	vaccineName: string;
	vaccineDose: string;
}

export interface CitizenResponseProps extends CitizenProps {
	id: string;
	created_at: string;
	updated_at: string;
}

type CitizenProviderProps = {
	children: ReactNode;
}

type CitizenContextProps = {
	getCitizens: () =>  Promise<CitizenResponseProps[]>;
	registerCitizen: ({name, cpf, birthDate, vaccineName, vaccineDose}: CitizenProps) => Promise<CitizenResponseProps>;
}

export const CitizenContext = createContext({} as CitizenContextProps)

export function CitizenContextProvider({ children }: CitizenProviderProps) {
	const auth = useAuth();

	async function getCitizens(): Promise<CitizenResponseProps[]> {
		const citizenResponse: AxiosResponse = await api.get('/citizens', {
			headers: {
				Authorization: `Bearer ${auth.token}`
			}
		})

		return citizenResponse.data;
	}

	async function registerCitizen({ name, cpf, birthDate, vaccineName, vaccineDose }: CitizenProps): Promise<CitizenResponseProps> {
		cpf = cpf.replace(/[^\d]/g, "");

		birthDate = new Date(
			parseInt(birthDate.substring(6, 10)),
			parseInt(birthDate.substring(3, 5))-1,
			parseInt(birthDate.substring(0, 2)),
		).toString();

		const data = {
			name,
			cpf,
			birthDate,
			vaccineName,
			vaccineDose
		}

		const citizenResponse: AxiosResponse = await api.post('/citizens', data, {
			headers: {
				Authorization: `Bearer ${auth.token}`
			}
		})

		return citizenResponse.data;
	}

	return (
		<CitizenContext.Provider value={{ getCitizens, registerCitizen }}>
			{children}
		</CitizenContext.Provider>
	)
}
