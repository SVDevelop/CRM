import {useState} from 'react'

export default function Input (init) {
    const [value, setValue] = useState(init)
	const onChange = (e) => {
		setValue({
			...value, [e.target.name]: e.target.value
		})
	}
    return {value, onChange}
}