import React, { useState } from "react";

const App = () => {
	const [email, setEmail] = useState("");
	const [github, setGithub] = useState("");
	const [comment, setComment] = useState("");
	const [linkedin, setLinkedin] = useState("");
	const [lastName, setLastName] = useState("");
	const [firstName, setFirstName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [timeInterval, setTimeInterval] = useState("");

	const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};
	const handleOnGithubChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setGithub(e.target.value);
	};
	const handleOnCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setComment(e.target.value);
	};
	const handleOnLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLinkedin(e.target.value);
	};
	const handleOnLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setLastName(e.target.value);
	};
	const handleOnFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFirstName(e.target.value);
	};
	const handleOnPhoneNumberChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setPhoneNumber(e.target.value);
	};
	const handleOnTimeIntervalChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
	) => {
		setTimeInterval(e.target.value);
	};

	const onSubmit = () => {};

	return (
		<div className="m-4">
			<h6>Welcome To The Platform</h6>

			<form className="row g-3">
				<div className="col-md-6">
					<label htmlFor="first_name" className="form-label">
						First Name
					</label>
					<input
						type="text"
						id="first_name"
						value={firstName}
						className="form-control"
						placeholder="First Name"
						onChange={handleOnFirstNameChange}
					/>
				</div>

				<div className="col-md-6">
					<label htmlFor="last_name" className="form-label">
						Last Name
					</label>
					<input
						type="text"
						id="last_name"
						value={lastName}
						className="form-control"
						placeholder="Last Name"
						onChange={handleOnLastNameChange}
					/>
				</div>

				<div className="col-md-6">
					<label htmlFor="phone_number" className="form-label">
						Phone Number
					</label>
					<input
						type="tel"
						id="phone_number"
						value={phoneNumber}
						className="form-control"
						placeholder="Phone Number"
						onChange={handleOnPhoneNumberChange}
					/>
				</div>

				<div className="col-md-6">
					<label htmlFor="email" className="form-label">
						Email address
					</label>
					<input
						type="email"
						id="email"
						value={email}
						className="form-control"
						placeholder="name@example.com"
						onChange={handleOnEmailChange}
					/>
				</div>

				<div className="col-md-6">
					<label htmlFor="linkedin" className="form-label">
						LinkedIn
					</label>
					<input
						type="url"
						id="linkedin"
						value={linkedin}
						className="form-control"
						placeholder="linkedin.com/in/username/"
						onChange={handleOnLinkedinChange}
					/>
				</div>

				<div className="col-md-6">
					<label htmlFor="github" className="form-label">
						GitHub
					</label>
					<input
						type="url"
						id="github"
						value={github}
						className="form-control"
						placeholder="github.com/briantical/"
						onChange={handleOnGithubChange}
					/>
				</div>

				<div className="col-12">
					<label htmlFor="exampleFormControlInput1" className="form-label">
						Time Intervals
					</label>
					<select
						className="form-select"
						value={timeInterval}
						aria-label="Default select example"
						onChange={handleOnTimeIntervalChange}
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
						value={comment}
						className="form-control"
						onChange={handleOnCommentChange}
					/>
				</div>

				<div className="col-12">
					<button type="submit" className="btn btn-primary" onClick={onSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default App;
