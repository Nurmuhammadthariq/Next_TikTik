import axios from "axios";
import jwt_decode from 'jwt-decode'

export const createOrGetUser = async (response: any) => {
	const decode: { name: string, picture: string, sub: string } = jwt_decode(response.credential)

	const { name, picture, sub } = decode
	const user = {
		_id: sub,
		_type: 'user',
		username: name,
		image: picture
	}

	await axios.post(`http://localhost:3000/api/auth`, user)
}