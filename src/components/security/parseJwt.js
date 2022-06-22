import jwtDecode from "jwt-decode";

export function parse (jwt) {
	const userInfo = jwtDecode(jwt)
	localStorage.setItem('token', jwt)
	localStorage.setItem('username', userInfo.sub)
	localStorage.setItem('authorities', JSON.stringify(userInfo.authorities[0].authority))
}