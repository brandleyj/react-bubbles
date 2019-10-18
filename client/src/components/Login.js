import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

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

	const login = e => {
		e.preventDefault();
		axiosWithAuth()
			.post("/login", credentials)
			.then(res => {
				console.log("postRequest", res);
				localStorage.setItem("token", res.data.payload);
				props.history.push("/bubbles");
			});
	};

	return (
		<>
			<h1>Login Form</h1>
			<form onSubmit={login}>
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
				<button>Login</button>
			</form>
		</>
	);
};

export default Login;
