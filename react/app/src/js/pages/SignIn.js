import { useState } from "react";

export function SignIn({ setUserInfo }) {
	// toggle whether to show password
	let [showSignUpPassword, setShowSignUpPassword] = useState(false);
	let [showConfirmPassword, setShowConfirmPassword] = useState(false);
	let [showLogInPassword, setShowLogInPassword] = useState(false);

	return (
		<>
			<div className="row pt-2 mb-4 justify-content-center">
				<h4 className="pt-3 text-center">
					Welcome to the Weld WISE Testing Site
				</h4>
				<div className="col-lg-6 col-12">
					<div className="card p-4 mb-4 shadow" id="sign-in">
						<div className="card-body">
							<ul
								className="nav nav-pills nav-justified pb-4"
								id="sign-in-tabs"
							>
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										data-bs-toggle="pill"
										data-bs-target="#sign-up-tab"
									>
										Sign Up
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										aria-current="page"
										data-bs-toggle="pill"
										data-bs-target="#log-in-tab"
									>
										Log In
									</a>
								</li>
							</ul>
							<div className="tab-content">
								<div
									className="tab-pane active show"
									id="sign-up-tab"
								>
									<h5 className="card-title mb-4">Sign Up</h5>
									<input
										type="text"
										id="sign-up-email"
										name="sign-up-email"
										className="form-control shadow-sm mb-4"
										autoComplete="email"
										placeholder="Email"
									/>
									<input
										type="text"
										id="sign-up-username"
										name="sign-up-username"
										className="form-control shadow-sm mb-4"
										autoComplete="username"
										placeholder="Username"
									/>
									<div className="input-group shadow-sm mb-4">
										<input
											type={
												showSignUpPassword
													? "text"
													: "password"
											}
											className="form-control shadow-none"
											placeholder="Password"
										/>
										<span
											className="input-group-text bg-white cursor-pointer"
											onClick={() => {
												setShowSignUpPassword(
													!showSignUpPassword
												);
											}}
										>
											{showSignUpPassword ? (
												<i className="bi bi-eye-slash"></i>
											) : (
												<i className="bi bi-eye"></i>
											)}
										</span>
									</div>
									<div className="input-group shadow-sm mb-4">
										<input
											type={
												showConfirmPassword
													? "text"
													: "password"
											}
											className="form-control shadow-none"
											placeholder="Confirm Password"
										/>
										<span
											className="input-group-text bg-white cursor-pointer"
											onClick={() => {
												setShowConfirmPassword(
													!showConfirmPassword
												);
											}}
										>
											{showConfirmPassword ? (
												<i className="bi bi-eye-slash"></i>
											) : (
												<i className="bi bi-eye"></i>
											)}
										</span>
									</div>
									<button
										type="button"
										className="btn btn-ww-orange"
									>
										<i className="bi bi-person-check-fill"></i>{" "}
										&nbsp;Create Account
									</button>
								</div>
								<div className="tab-pane" id="log-in-tab">
									<h5 className="card-title mb-4">Log In</h5>
									<input
										type="text"
										id="log-in-username"
										name="log-in-username"
										className="form-control shadow-sm mb-4"
										autoComplete="username"
										placeholder="Username"
									/>
									<div className="input-group shadow-sm mb-4">
										<input
											type={
												showLogInPassword
													? "text"
													: "password"
											}
											className="form-control shadow-none"
											placeholder="Password"
										/>
										<span
											className="input-group-text bg-white cursor-pointer"
											onClick={() => {
												setShowLogInPassword(
													!showLogInPassword
												);
											}}
										>
											{showLogInPassword ? (
												<i className="bi bi-eye-slash"></i>
											) : (
												<i className="bi bi-eye"></i>
											)}
										</span>
									</div>
									<button
										type="button"
										className="btn btn-ww-orange"
										onClick={() => {
											setUserInfo({
												loggedIn: true,
											});
										}}
									>
										<i className="bi bi-person-check-fill"></i>{" "}
										&nbsp;Log In
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row pt-2 pb-4 text-center">
				<div className="col-12">
					<label className="d-block pb-2">
						Looking for our main website?
					</label>
					<a
						href="https://weld-wise.com"
						className="text-light no-underline"
					>
						<button
							type="button"
							className="btn btn-ww-orange shadow"
							id="link-to-main"
						>
							<i className="bi bi-globe-americas"></i> Main
							Website
						</button>
					</a>
				</div>
			</div>
		</>
	);
}

export default SignIn;
