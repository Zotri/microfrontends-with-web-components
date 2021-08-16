import React, { useState, useEffect } from "react";

const EmployeeView = ({ employee }) => {
	const employeeId = employee;
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const baseUrl = `http://localhost:8080/api/employees/find/${employeeId}`;
	console.log("employeeId", employee);
	useEffect(() => {
		fetch(baseUrl)
			.then((response) => response.json())
			.then(
				(result) => {
					setData(result);
					setLoading(false);
					console.log("result", result);
				},
				(error) => {
					setError("error while fetching from the api");
					console.log("error", error);
				}
			);
	}, []);

	console.log("data from react", data);
	if (loading) return "Loading...";
	if (error) return "Error!";

	return (
		<div>
			<h5>Event has been obtained </h5>
			<table id='employee-review'>
				<tbody>
					<div>
						<tr>ID: {data.id}</tr>
						<tr>First name: {data.firstName}</tr>
						<tr>Last name: {data.lastName}</tr>
						<tr>Email: {data.email}</tr>
					</div>
				</tbody>
			</table>
		</div>
	);
};

export default EmployeeView;
