import { useState } from "react"
import "./Style1.css"
import { Link } from "react-router-dom"
function Signup() {
	const [name, setname] = useState({
		firstname: "",
		lastname: "",
		password: "",
		confirmpassword: "",
		errfirstname: "",
		errlastname: "",
		errpassword: "",
		errconfirmpassword: "",
		errBordercolor: "",
		errBordercolor2: "",
		errBordercolor3: "",
		errBordercolor4: ""
	})
	const change = () => {
		if (name.firstname === "") {
			setname({
				...name,
				errfirstname: "FirstName is Required!",
				errBordercolor: "red"
			})
		} else if (name.lastname === "") {
			setname({
				...name,
				errlastname: "Lastname is Required!",
				errBordercolor2: "red"
			})
		} else if (name.password === "") {
			setname({
				...name,
				errpassword: "Password is Required!",
				errBordercolor3: "red"
			})
		} else if (name.confirmpassword === "") {
			setname({
				...name,
				errconfirmpassword: "Confirm is Required !",
				errBordercolor4: "red"
			})
		}
	}
	return (
		<div className="container">
			<center>
				<h2>Sign Up</h2>
			</center>
			<div className="form-container">
				<form className="form-body">
					<label className="firstname">First-Name *</label>
					<input
						style={{ borderColor: name.errBordercolor }}
						className="finputfield"
						type="text"
						placeholder="Enter The First Name"
						name="firstname"
						value={name.firstname}
						onChange={(e) => {
							setname({
								...name,
								firstname: e.target.value,
								errfirstname: "",
								errBordercolor: ""
							})
						}}></input>
					<span className="errfirst">{name.errfirstname}</span>
					<label className="lastname">Last-Name *</label>
					<input
						style={{ borderColor: name.errBordercolor2 }}
						className="linputname"
						type="text"
						placeholder="Enter The Last  Name"
						name="lastname"
						value={name.lastname}
						onChange={(e) => {
							setname({
								...name,
								lastname: e.target.value,
								errlastname: "",
								errBordercolor2: ""
							})
						}}></input>
					<span className="errlast">{name.errlastname}</span>
					<label className="passwordss">Password *</label>
					<input
						style={{ borderColor: name.errBordercolor3 }}
						className="pinputname"
						type="text"
						placeholder="Enter The Password"
						name="password"
						value={name.password}
						onChange={(e) => {
							setname({
								...name,
								password: e.target.value,
								errpassword: "",
								errBordercolor3: ""
							})
						}}></input>
					<span className="erpassword">{name.errpassword}</span>
					<label className="confirmpassword">Confirm Password *</label>
					<input
						style={{ borderColor: name.errBordercolor4 }}
						className="cpass"
						type="text"
						placeholder="Enter The Confirm Password"
						name="confirmpassword"
						value={name.confirmpassword}
						onChange={(e) => {
							setname({
								...name,
								confirmpassword: e.target.value,
								errconfirmpassword: "",
								errBordercolor4: ""
							})
						}}></input>
					<span className="errconfpas">{name.errconfirmpassword}</span>
					<center>
						<button
							className="button btn btn-primary"
							type="button"
							onClick={() => change()}>
							Signup
						</button>
					</center>
					<Link to="/Login">
						<h4 className="h4">Already have an account?</h4>
					</Link>
				</form>
			</div>
		</div>
	)
}
export default Signup
