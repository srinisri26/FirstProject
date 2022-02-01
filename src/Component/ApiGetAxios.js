import React, { useEffect, useState } from "react"
import axios from "axios"
function ApiGetAxios() {
	const [post, setpost] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
			setLoading(false)
			console.log(res.data)
			setpost(res.data)
        })
            .catch(err =>
            {
                
            })
	}, [])
	return (
		<div>
			<h1>Hello</h1>
			<ul>{loading ? "Loading..." : post.map((add) => <li key={add.id}>{add.title}</li>)}</ul>
		</div>
	)
}
export default ApiGetAxios
