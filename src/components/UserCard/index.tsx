import React from 'react';
import { View, Text } from 'react-native';

import VaccineIcon from '../../assets/icons/vaccine.svg';

import { formatBirthDate } from '../../utils/format';
import { validateCpf } from '../../utils/validation';

import { styles } from './styles';

type UserCardProps = {
	username: string;
	cpf: string;
	birthDate: string;
	vaccineName: string;
	vaccineDose: string;
}

export function UserCard({ username, cpf, birthDate, vaccineName, vaccineDose }: UserCardProps) {
	return (
		<View style={styles.userCard}>
			<View style={styles.userInfo}>
				<Text style={styles.username}>{username}</Text>

				<View>
					<Text style={styles.cpf}>CPF: {validateCpf(cpf)}</Text>
					<Text style={styles.birthDate}>Data de Nascimento: {formatBirthDate(birthDate)}</Text>
				</View>
			</View>

			<View style={styles.vaccineInfo}>
				<VaccineIcon width={120} height={40} />
				<Text style={styles.vaccineName}>{vaccineName}</Text>
				<Text style={styles.vaccineDose}>Dose {vaccineDose}</Text>
			</View>
		</View>
	);
}
