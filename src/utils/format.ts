export function formatBirthDate(birthDate: string) {
	const date = new Date(birthDate);

	function addZero(data: number) {
		if (data.toString().length < 2)
			return `0${data}`
		else
			return data
	}

	return `${addZero(date.getDate())}/${addZero(date.getMonth() + 1)}/${date.getFullYear()}`
}
