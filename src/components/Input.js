import { useState } from "react"
import "./Input.css"

const fixedInputClass = "appearance-none relative block w-full m-0 input-handle"

export default function Input({
	handleChange,
	value,
	labelText,
	labelFor,
	id,
	name,
	type,
	isRequired = false,
	placeholder,
	customClass = "",
    message = "",
}) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(true)
	if (id === "password") {
		customClass += " input-password"
	}
	const handleChangeIcon = () => {
		setIsPasswordVisible(!isPasswordVisible)
		const password = document.getElementById("password")
		if (isPasswordVisible) {
			password.type = "text"
		} else {
			password.type = "password"
		}
	}
	return (
		<div className="input-mb">
			<label htmlFor={labelFor} className="sr-only">
				{labelText}
			</label>
			<div
				className={
					id === "password"
						? "input-password-icon input-border-custom"
						: "input-border-custom"
				}
			>
				<input
                    autoComplete="off"
					onChange={handleChange}
					value={value}
					id={id}
					name={name}
					type={type}
					required={isRequired}
					className={fixedInputClass + customClass}
					placeholder={placeholder}
				/>

				{id === "password" ? (
					<>
						{isPasswordVisible ? (
							<i
								className="input-password-icon-true"
								onClick={handleChangeIcon}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
									<path d="M16 16c-.8125-.8125 1.1875-4 0-4-2.1875 0-4 1.8125-4 4s1.8125 4 4 4 4-1.8125 4-4c0-1-3.375.8125-4 0Zm0-10C5.625 6 0 14.8125 0 16.1875 0 17.625 5.625 26 16 26s16-8.8125 16-10S26.375 6 16 6Zm0 16c-3.375 0-6-2.625-6-6s2.625-6 6-6 6 2.625 6 6-2.625 6-6 6Zm0 0" />
								</svg>
							</i>
						) : (
							<i
								className="input-password-icon-false"
								onClick={handleChangeIcon}
							>
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
									<path d="M27.375 21.813 22 16.375V16c0-3.375-2.625-6-6-6h-.375L12 6.375C13.375 6.187 14.625 6 16 6c10.375 0 16 8.813 16 10 0 .625-1.625 3.375-4.625 5.813ZM20 25.625c-1.375.188-2.625.375-4 .375-10.375 0-16-8.375-16-9.813 0-.812 1.625-3.562 4.625-6L10 15.625V16c0 3.375 2.625 6 6 6h.375ZM6.375 4 28 25.625 25.625 28 4 6.375Zm0 0" />
								</svg>
							</i>
						)}
					</>
				) : (
					<></>
				)}
                <p className="label-msg-input-err">
                    <span className="message-error-icon"></span>
                    <span className="input-message">{message}</span>
                </p>
			</div>
		</div>
	)
}
