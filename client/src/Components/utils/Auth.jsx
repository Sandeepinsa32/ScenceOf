export default function authHeader() {
	const token = localStorage.getItem('token');
	console.log(token);

	if (token) {
		return { Authorization: 'Bearer ' + token };
	} else {
		return {};
	}
}

export function forpost() {
	const token = localStorage.getItem('token');
	if (token) {
		return {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
			Authorization: 'Bearer ' + token,
		};
	} else {
		return {};
	}
}
