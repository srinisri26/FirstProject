import React, { useState } from "react"

function Additem() {
	const [item, setitem] = useState([
		{ id: "1", name: "samsung" },
		{ id: "2", name: "iphone" },
		{ id: "3", name: "Realme" }
	])
	const change = () => {
		setitem([...item, { name: "redmi" }
		])
	}
	return (
		<div>
			<h1>Product</h1>
			<ul>
				{item.map((produ) => (
					<li key={produ.id}>{produ.name}</li>
				))}
			</ul>
			<button onClick={() => change()}>Additem</button>
		</div>
	)
}

export default Additem
