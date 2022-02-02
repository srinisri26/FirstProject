import { useEffect, useState } from "react"
import "./Stylepage.css"
function Loginpagenew() {
	const initialvalues = {
		username: "",
		email: "",
		password: ""
	}
	const [formvalues, setFormValues] = useState(initialvalues)
	const [formErrors, setFormErrors] = useState({})
	const [submit, setsubmit] = useState(false)
	const handlechange = (e) => {
		const { name, value } = e.target
		setFormValues({
			...formvalues,
			[name]: value
		})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		setFormErrors(validate(formvalues))
		setsubmit(true)
	}
	useEffect(() => {
		if (Object.keys(formErrors).length === 0 && submit) {
		}
	})
	const validate = (values) => {
		const errors = {}
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
		if (!values.username) {
			errors.username = "Username is required!"
		}
		if (!values.email) {
			errors.email = "Email id is required!!"
		} else if (!regex.test(values.email)) {
			errors.email = "Enter the valid format"
		}
		if (!values.password) {
			errors.password = "Password is required!"
		} else if (values.password < 4) {
			errors.password = "Password must be more than 4 character"
		}
		return errors
	}
	return (
		<div className="container">
			<form className="form-body" onSubmit={handleSubmit}>
				<h3>Login Form</h3>
				<div className="ui divider">
					<div className="ui form">
						<center>
							<div className="field">
								<label className="username">User-Name</label>
								<input
									className="user-text"
									type="text"
									name="username"
									placeholder="Enter The Username"
									value={formvalues.username}
									onChange={handlechange}></input>
							</div>
						</center>
						<p className="formerror-user">{formErrors.username}</p>
						<br></br>
						<center>
							<div className="email">
								<label>Email</label>
								<input
									className="etx"
									type="text"
									name="email"
									placeholder="Enter The email"
									value={formvalues.email}
									onChange={handlechange}></input>
							</div>
						</center>
						<p className="formerror-email">{formErrors.email}</p>
						<br></br>
						<div className="field">
							<label className="passwordname">Password</label>
							<input
								className="ptx"
								type="text"
								name="password"
								placeholder="Enter The password"
								value={formvalues.password}
								onChange={handlechange}></input>
						</div>
						<p className="formerror-password">{formErrors.password}</p>
						<center>
							<button className="submit-btn">Submit</button>
						</center>
					</div>
				</div>
			</form>
		</div>
	)
}
export default Loginpagenew
