import "./App.css"
import Additem from "./Component/Additem"
import ApiGetAxios from "./Component/ApiGetAxios"
import Login from "./Component/Login"
import Loginpagenew from "./Component/LoginPagenew"
import Signup from "./Component/Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
	return (
		<div className="App">
			<Signup />
		</div>
	)
}

export default App
