import { AxiosResponse } from "axios";
import { useAuth } from "../hooks/useAuth";
import { api } from "./api";

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

export async function registerCitizen({ name, cpf, birthDate, vaccineName, vaccineDose }: CitizenProps): Promise<CitizenResponseProps> {
	const auth = useAuth();

	const citizenResponse: AxiosResponse = await api.post('/citizens', {
		name,
		cpf,
		birthDate,
		vaccineName,
		vaccineDose
	}, {
		headers: {
			Authorization: `Bearer ${auth.token}`
		}
	})

	return citizenResponse.data;
}

export async function getCitizens(): Promise<CitizenResponseProps[]> {
	const auth = useAuth();

	const citizenResponse: AxiosResponse = await api.get('/citizens', {
		headers: {
			Authorization: `Bearer ${auth.token}`
		}
	})

	return citizenResponse.data;
}
