// components
import DeleteAccountModal from "../../modals/DeleteAccountModal";
import PasswordResetModal from "../../modals/PasswordResetModal";
import { useState } from "react";

export function SecurityPane() {
	// enable 2 factor authentication
	let [enable2FA, setEnable2FA] = useState(true);

	return (
		<div className="tab-pane fade" id="security" role="tabpanel">
			<form>
				<h5 className="pb-2">Account Security</h5>
				<ul className="list-unstyled lg-w-50">
					<li className="p-2">
						<label htmlFor="password-reset">Password Reset</label>
						<button
							type="button"
							className="btn btn-ww-light d-block w-75 shadow"
							id="password-reset"
							name="password-reset"
							data-bs-toggle="modal"
							data-bs-target="#password-reset-modal"
						>
							<i className="bi bi-file-lock2-fill"></i> Reset My
							Password
						</button>
					</li>
					<li className="p-2">
						<span>2-Factor Authentication</span>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								id="toggle-2fa"
								name="toggle-2fa"
								checked={enable2FA}
								onChange={() => {
									setEnable2FA(!enable2FA);
								}}
							/>
							<label htmlFor="toggle-2fa">
								{enable2FA ? (
									<i className="bi bi-shield-fill-check"></i>
								) : (
									<i className="bi bi-shield-slash-fill"></i>
								)}{" "}
								2-Factor Authentication
							</label>
						</div>
					</li>
					<li className="p-2">
						<label htmlFor="delete-account" className="text-danger">
							Delete Account
						</label>
						<button
							type="button"
							className="btn btn-danger d-block w-75 shadow"
							id="delete-account"
							name="delete-account"
							data-bs-toggle="modal"
							data-bs-target="#delete-account-modal"
						>
							<i className="bi bi-person-x-fill"></i> Delete My
							Account
						</button>
					</li>
				</ul>
			</form>

			<PasswordResetModal />
			<DeleteAccountModal />
		</div>
	);
}

export default SecurityPane;
