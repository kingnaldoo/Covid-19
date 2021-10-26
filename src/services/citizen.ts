import { AxiosResponse } from "axios";
import { api } from "./api";

type CitizenProps = {
	name: string;
	cpf: string;
	birthDate: string;
	vaccineName: string;
	vaccineDose: string;
}

interface CitizenResponseProps extends CitizenProps {
	id: string;
	created_at: string;
	updated_at: string;
}

export async function registerCitizen({ name, cpf, birthDate, vaccineName, vaccineDose }: CitizenProps): Promise<CitizenResponseProps> {
	const citizenResponse: AxiosResponse = await api.post('/citizens', {
		name,
		cpf,
		birthDate,
		vaccineName,
		vaccineDose
	})

	return citizenResponse.data;
}

export async function getCitizens(): Promise<CitizenResponseProps[]> {
	const citizenResponse: AxiosResponse = await api.get('/citizens')

	return citizenResponse.data;
}
