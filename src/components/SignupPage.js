import { useState } from "react"
import Header from "./Header"
import Signup from "./Signup"
import "./SignupPage.css"

export default function SignupPage() {
	const [isLanguageMenuVisibility, setIsLanguageMenuVisibility] =
		useState(false)

	const handleClickLanguageButton = (e) => {
		e.target.blur()
		setIsLanguageMenuVisibility(!isLanguageMenuVisibility)
	}

	return (
		<div className="signup-wrapper h-screen flex justify-center overflow-hidden">
			<div className="left-side w-1/2 flex flex-col justify-center items-center">
				<h1 className="text-white left-side-heading-text">
					Sign up
					<br />
					and come on in
				</h1>
				<div>
					<picture className="">
						<source
							srcset="https://www.typeform.com/static/images/signup-page/product-sample@1x.webp"
							type="image/webp"
						/>
						<source
							data-testid="default-source"
							srcset="https://www.typeform.com/static/images/signup-page/product-sample@2x.webp"
						/>
						<img
							alt="Typeform product sample"
							loading="lazy"
							decoding="async"
							fetchpriority="low"
							role="presentation"
							src="https://www.typeform.com/static/images/signup-page/product-sample@3x.webp"
						/>
					</picture>
				</div>
				<p className="text-white left-side-name-logo">© Typeform</p>
			</div>
			<div className="right-side w-1/2 max-w-full">
				<div className="right-side-nav-left">
					<div className="languages cursor-pointer flex items-center justify-center relative">
						<button
							onClick={handleClickLanguageButton}
							className="relative button-choose-language text-language-choose flex justify-center items-center"
							type="button"
						>
							<div className="language-icon">
								<svg
									height="17"
									viewBox="0 0 20 20"
									width="17"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
										fill="#5E5E5E"
										fill-rule="evenodd"
									></path>
								</svg>
							</div>
							<span>English</span>
							<svg
								class="w-2.5 h-2.5 ms-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>
						<div
							className={
								isLanguageMenuVisibility
									? "menu-choose-language"
									: "menu-choose-language-hide"
							}
						>
							<ul class="">
								<li>
									<a href="#" className="text-fade-color">
										<span className="menu-language-item">English</span>
									</a>
								</li>
								<li>
									<a href="#" className="text-fade-color">
										<span className="menu-language-item">Español</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="right-side-nav flex justify-between">
					<div className="languages cursor-pointer flex items-center justify-center relative">
						<button
							onClick={handleClickLanguageButton}
							className="relative button-choose-language text-language-choose flex justify-center items-center"
							type="button"
						>
							<div className="language-icon">
								<svg
									height="17"
									viewBox="0 0 20 20"
									width="17"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
										fill="#5E5E5E"
										fill-rule="evenodd"
									></path>
								</svg>
							</div>
							<span>English</span>
							<svg
								class="w-2.5 h-2.5 ms-3"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 10 6"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m1 1 4 4 4-4"
								/>
							</svg>
						</button>
						<div
							className={
								isLanguageMenuVisibility
									? "menu-choose-language"
									: "menu-choose-language-hide"
							}
						>
							<ul class="">
								<li>
									<a href="#" className="text-fade-color">
										<span className="menu-language-item">English</span>
									</a>
								</li>
								<li>
									<a href="#" className="text-fade-color">
										<span className="menu-language-item">Español</span>
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="login-zone flex justify-center items-center">
						<p className="login-desc-text">Already have an account?</p>
						<div className="login-button">
							<a href="/login" className="login-link">
								Log in
							</a>
						</div>
					</div>
				</div>
				<div className="flex flex-col flex-1 justify-center justify-self-center items-center signup-body">
					<Header
						heading="Get better data with conversational forms, surveys, quizzes & more."
						paragraph=""
						linkName=""
						linkUrl="/"
					/>
					<Signup />
				</div>
			</div>
		</div>
	)
}
