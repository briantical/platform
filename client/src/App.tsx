import React, { useState } from "react";
import { Formik, FormikHelpers } from "formik";

interface IValues {
	email: string;
	github: string;
	comment: string;
	linkedin: string;
	lastName: string;
	firstName: string;
	phoneNumber: string;
	timeInterval: string;
}

const initialValues: IValues = {
	email: "",
	github: "",
	comment: "",
	linkedin: "",
	lastName: "",
	firstName: "",
	phoneNumber: "",
	timeInterval: "",
};

const App = () => {
	const onSubmit = (values: IValues, helpers: FormikHelpers<IValues>) => {
		console.log(values);
	};

	return (
		<div className="m-4">
			<h6>Welcome To The Platform</h6>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, handleChange }) => {
					return (
						<form className="row g-3">
							<div className="col-md-6">
								<label htmlFor="first_name" className="form-label">
									First Name
								</label>
								<input
									type="text"
									id="first_name"
									value={values.firstName}
									className="form-control"
									placeholder="First Name"
									onChange={handleChange}
								/>
							</div>

							<div className="col-md-6">
								<label htmlFor="last_name" className="form-label">
									Last Name
								</label>
								<input
									type="text"
									id="last_name"
									value={values.lastName}
									className="form-control"
									placeholder="Last Name"
									onChange={handleChange}
								/>
							</div>

							<div className="col-md-6">
								<label htmlFor="phone_number" className="form-label">
									Phone Number
								</label>
								<input
									type="tel"
									id="phone_number"
									value={values.phoneNumber}
									className="form-control"
									placeholder="Phone Number"
									onChange={handleChange}
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
									className="form-select"
									value={values.timeInterval}
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
								<button type="submit" className="btn btn-primary">
									Submit
								</button>
							</div>
						</form>
					);
				}}
			</Formik>
		</div>
	);
};

export default App;
