export function getFirstName(name: string) {
	const indexEmpty = name.indexOf(' ');
	if(indexEmpty !== -1)
		return name.substring(0, indexEmpty);
	else
		return name;
}
