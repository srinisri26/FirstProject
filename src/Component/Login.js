import React, { useState } from "react"
import "./Style.css"

function Login() {
	const [name, setname] = useState({
		firstName: "",
		lastName: "",
		email: "",
		errFirstName: "",
		errLastName: "",
		errEmail: "",
		errColor: "",
		errColor1: "",
		errColor2: "",
		errorFullBox: ""
	})

	const handlesubmit = () => {
		if (name.firstName.length > 0 && name.lastName.length > 0 && name.email.length > 0) {
			alert("Sucessfully Submitted")
		} else if (name.firstName === "" && name.lastName === "" && name.email === "") {
			alert("Given Fields are Not Updated")
			setname({
				...name,
				errorFullBox: "Please Enter The Field"
			})
		} else if (name.firstName === "") {
			setname({
				...name,
				errFirstName: "Enter Your First Name",
				errColor: "red"
			})
		} else if (name.lastName === "") {
			setname({ ...name, errLastName: "Enter Your Last Name", errColor1: "red" })
		} else if (name.email === "") {
			setname({ ...name, errEmail: "Enter The Email-id", errColor2: "red" })
		}
	}

	return (
		<div>
			<center>
				<h1>Login Page</h1>
			</center>
			<br></br>
			<center>
				<div className="form-container">
					<form className="register-form" autoComplete="off">
						<input
							style={{ borderColor: name.errColor }}
							className="form-field"
							placeholder="Enter the Firstname"
							name="firstname"
							value={name.firstName}
							onChange={(e) => {
								setname({
									...name,
									firstName: e.target.value,
									errFirstName: "",
									errColor: "",
									errorFullBox: ""
								})
							}}></input>
						<span className="spanerror">{name.errorFullBox}</span>
						<span className="spanfname">{name.errFirstName}</span>

						<br></br>
						<br></br>
						<input
							style={{ borderColor: name.errColor1 }}
							className="form-field"
							placeholder="Enter the Lastname"
							name="lastname"
							value={name.lastName}
							onChange={(e) =>
								setname({
									...name,
									lastName: e.target.value,
									errLastName: "",
									errColor1: "",
									errorFullBox: ""
								})
							}></input>
						<span className="spanerror1">{name.errorFullBox}</span>
						<span className="spanlname">{name.errLastName}</span>
						<br></br>
						<br></br>
						<input
							style={{ borderColor: name.errColor2 }}
							className="form-field"
							placeholder="Enter the email-id"
							name="email"
							value={name.email}
							onChange={(e) =>
								setname({
									...name,
									email: e.target.value,
									errEmail: "",
									errColor2: "",
									errorFullBox: ""
								})
							}></input>
						<span className="spanerror2">{name.errorFullBox}</span>
						<span className="spanemail">{name.errEmail}</span>
						<br></br>
						<br></br>
						<button
							type="button"
							onClick={() => handlesubmit()}
							className="btn btn-primary">
							{" "}
							Submit
						</button>
					</form>
				</div>
			</center>
		</div>
	)
}

export default Login
