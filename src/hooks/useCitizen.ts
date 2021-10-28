import { useContext } from 'react';
import { CitizenContext } from '../contexts/citizenContext';

export function useCitizen() {
	const value = useContext(CitizenContext);
	return value;
}
