interface userData {
	username: string;
	password: string;
}

export const userLogin = async (user: userData) => {
	return new Promise((resolve, reject) => {
		console.log(user.username, user.password);
		if (user.username === 'test@test.com' && user.password === '1234') {
			resolve({ user: 'test@test.com' });
		} else {
			reject({
				message: "Username and password don't match",
			});
		}
	});
};

export const userLogout = async () => {
	return new Promise((resolve, reject) => {
		resolve({});
	});
};
