export function validateCpf(cpf: string) {
	cpf = cpf.replace(/[^\d]/g, "");

	return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

export function validateBirthDate(birthDate: string) {
	birthDate = birthDate.replace(/[^\d]/g, "");

	return birthDate.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
}
