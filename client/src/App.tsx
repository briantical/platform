import React from "react";
import axios from "axios";
import { Formik, FormikHelpers, Form } from "formik";
import { object, string } from "yup";

interface IValues {
	role: string;
	email: string;
	github: string;
	comment: string;
	linkedin: string;
	last_name: string;
	first_name: string;
	phone_number: string;
	time_interval: string;
}

const initialValues: IValues = {
	role: "",
	email: "",
	github: "",
	comment: "",
	linkedin: "",
	last_name: "",
	first_name: "",
	phone_number: "",
	time_interval: "",
};

const schema = object({}).shape({
	role: string().required("The role is required"),
	email: string().email().required("The email is required"),
	github: string().url(),
	comment: string().required("The comments are required"),
	linkedin: string().url(),
	last_name: string().required("The last name is required"),
	first_name: string().required("The first name is required"),
	phone_number: string(),
	time_interval: string(),
});

const instance = axios.create({
	timeout: 1000,
	baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080/api/v1",
	headers: { "Content-Type": "application/json" },
});

// TODO: Fetch the open positions from the backend
const OPEN_POSITIONS = [
	"Frontend Developer",
	"Backend Developer",
	"Fullstack Developer",
	"DevOps Engineer",
];

const App = () => {
	const handleSubmit = async (values: IValues) => {
		try {
			const response = await instance.post("/applications/apply", values);
			return response.status === 200;
		} catch (error) {
			return;
		}
	};

	const onSubmit = async (values: IValues, helpers: FormikHelpers<IValues>) => {
		const { resetForm, setSubmitting } = helpers;
		const { first_name } = values;
		setSubmitting(true);
		const response = await handleSubmit(values);
		if (!response) {
			setSubmitting(false);
			return;
		} else {
			resetForm();
			setSubmitting(false);
			alert(`${first_name} your application been successfully submitted`);
		}
	};

	return (
		<div className="container-fluid m-4">
			<h6 className="fw-semibold text-center">Welcome To The Platform</h6>
			<Formik
				onSubmit={onSubmit}
				validationSchema={schema}
				initialValues={initialValues}
			>
				{({ values, errors, isSubmitting, handleChange }) => {
					return (
						<Form className="row g-3">
							<div className="col-md-6">
								<label htmlFor="first_name" className="form-label">
									First Name
								</label>
								<input
									type="text"
									id="first_name"
									value={values.first_name}
									className="form-control"
									placeholder="First Name"
									onChange={handleChange}
									autoComplete="off"
								/>
								{errors.first_name && (
									<div className="text-danger fw-light small">
										{errors.first_name}
									</div>
								)}
							</div>

							<div className="col-md-6">
								<label htmlFor="last_name" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									id="last_name"
									value={values.last_name}
									className="form-control"
									placeholder="Last Name"
									onChange={handleChange}
									autoComplete="off"
								/>
								{errors.last_name && (
									<div className="text-danger fw-light small">
										{errors.last_name}
									</div>
								)}
							</div>

							<div className="col-md-6">
								<label htmlFor="phone_number" className="form-label">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone_number"
									value={values.phone_number}
									className="form-control"
									placeholder="Phone Number"
									onChange={handleChange}
									autoComplete="off"
								/>
							</div>

							<div className="col-md-6">
								<label htmlFor="email" className="form-label">
									Email address
								</label>
								<input
									type="email"
									id="email"
									value={values.email}
									className="form-control"
									placeholder="name@example.com"
									onChange={handleChange}
									autoComplete="off"
								/>
								{errors.email && (
									<div className="text-danger fw-light small">
										{errors.email}
									</div>
								)}
							</div>

							<div className="col-md-6">
								<label htmlFor="linkedin" className="form-label">
									LinkedIn
								</label>
								<input
									type="url"
									id="linkedin"
									value={values.linkedin}
									className="form-control"
									placeholder="linkedin.com/in/username/"
									onChange={handleChange}
									autoComplete="off"
								/>
							</div>

							<div className="col-md-6">
								<label htmlFor="github" className="form-label">
									GitHub
								</label>
								<input
									type="url"
									id="github"
									value={values.github}
									className="form-control"
									placeholder="github.com/briantical/"
									onChange={handleChange}
									autoComplete="off"
								/>
							</div>

							<div className="col-md-6">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
								>
									Role
								</label>
								<select
									id="role"
									className="form-select"
									value={values.role}
									aria-label="Select Role"
									onChange={handleChange}
								>
									<option value="" />
									{OPEN_POSITIONS.map((position) => {
										return (
											<option key={position} value={position}>
												{position}
											</option>
										);
									})}
								</select>
							</div>

							<div className="col-md-6">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
								>
									Time Intervals
								</label>
								<input
									type="datetime-local"
									id="time_interval"
									className="form-select"
									value={values.time_interval}
									onChange={handleChange}
								/>
							</div>

							<div className="col-12">
								<label htmlFor="comment" className="form-label">
									Comments
								</label>
								<textarea
									rows={3}
									id="comment"
									value={values.comment}
									className="form-control"
									onChange={handleChange}
								/>
								{errors.comment && (
									<div className="text-danger fw-light small">
										{errors.comment}
									</div>
								)}
							</div>

							<div className="col-12">
								<button
									type="submit"
									className="btn btn-outline-secondary"
									disabled={isSubmitting}
								>
									Submit
								</button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</div>
	);
};

export default App;
