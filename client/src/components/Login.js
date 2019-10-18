import React from "react";
import axios from "axios";

const Login = props => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: ""
	});

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const onLogin = e => {
		e.preventDefault();
		axios.post("http://localhost:5000/api/login", credentials).then(res => {
			console.log(res);
			localStorage.setItem("token", res.data.payload);
			props.history.push("/bubbles");
		});
	};

	return (
		<>
			<h1>Login Form</h1>
			<form onSubmit={onLogin}>
				<input
					type="text"
					name="username"
					placeholder="Username"
					value={credentials.username}
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={credentials.password}
					onChange={handleChange}
				/>
				<button>Log In</button>
			</form>
		</>
	);
};

export default Login;
