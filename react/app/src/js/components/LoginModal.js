import { useState } from "react";

export function LoginModal(props) {
	let [showPassword, setShowPassword] = useState(false);

	return (
		<div className="modal" id="login-modal">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Log In</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<div className="row">
							<div className="col-xs-12">
								<label htmlFor="username">Username:</label>
								<input
									type="text"
									id="username"
									name="username"
									className="form-control"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-6">
								<label htmlFor="password">Password:</label>
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									name="password"
									className="form-control"
								/>
							</div>
						</div>
						<div className="row">
							<div className="col-xs-12">
								<label>
									<input
										type="checkbox"
										id="show=password"
										onClick={() => {
											setShowPassword(!showPassword);
										}}
									/>{" "}
									Show Password
								</label>
							</div>
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-danger"
							data-bs-dismiss="modal"
						>
							Close
						</button>
						<button
							type="button"
							className="btn btn-success"
							data-bs-dismiss="modal"
							onClick={props.clickedLogIn}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginModal;
