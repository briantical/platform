import React from "react";
import axios from "axios";
import { Formik, FormikHelpers, Form } from "formik";
import { object, string } from "yup";

interface IValues {
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
	email: string().email().required(),
	github: string().url().required(),
	comment: string().required(),
	linkedin: string().url().required(),
	last_name: string().required(),
	first_name: string().required(),
	phone_number: string().required(),
	time_interval: string().required(),
});

const instance = axios.create({
	timeout: 1000,
	baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8080/api/v1",
	headers: { "Content-Type": "application/json" },
});

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
		setSubmitting(true);
		const response = await handleSubmit(values);
		if (!response) {
			setSubmitting(false);
			return;
		} else {
			resetForm();
			setSubmitting(false);
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
				{({ values, isSubmitting, handleChange }) => {
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

							<div className="col-12">
								<label
									htmlFor="exampleFormControlInput1"
									className="form-label"
								>
									Time Intervals
								</label>
								<select
									id="time_interval"
									className="form-select"
									value={values.time_interval}
									aria-label="Default select example"
									onChange={handleChange}
								>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
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
