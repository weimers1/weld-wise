// components
import NotificationList from "../components/NotificationList";
import { useState } from "react";

// styles
import "../../css/user-settings.css";

export function UserSettings() {
	// enable notifications
	let [enableNotifications, setEnableNotifications] = useState(true);

	return (
		<div className="card mt-4 shadow-sm" id="user-settings">
			<div className="card-body">
				<div className="d-flex">
					<div className="nav flex-column nav-pills" role="tablist">
						<a
							className="nav-link p-3 text-end text-dark active"
							id="toggle-account-tab"
							data-bs-toggle="pill"
							data-bs-target="#account"
							type="button"
							role="tab"
						>
							<i className="bi bi-person-fill"></i> Account
						</a>
						<a
							className="nav-link p-3 text-end text-dark"
							id="toggle-security-tab"
							data-bs-toggle="pill"
							data-bs-target="#security"
							type="button"
							role="tab"
						>
							<i className="bi bi-lock-fill"></i> Security
						</a>
						<a
							className="nav-link p-3 text-end text-dark"
							id="toggle-notifications-tab"
							data-bs-toggle="pill"
							data-bs-target="#notifications"
							type="button"
							role="tab"
						>
							<i className="bi bi-bell-fill"></i> Notifications
						</a>
						<a
							className="nav-link p-3 text-end text-dark"
							id="toggle-notifications-tab"
							data-bs-toggle="pill"
							data-bs-target="#help"
							type="button"
							role="tab"
						>
							<i className="bi bi-patch-question-fill"></i> Help
						</a>
					</div>
					<div className="tab-content ps-3 pt-3 pe-3 flex-grow-1">
						<div
							className="tab-pane fade show active"
							id="account"
							role="tabpanel"
						>
							<form>
								<h5 className="pb-2">Account Information</h5>
								<div className="row pb-4">
									<div className="col-md-6 col-12">
										<label htmlFor="first-name">
											First Name
										</label>
										<input
											type="text"
											className="form-control"
											id="first-name"
											name="first-name"
										/>
									</div>
									<div className="col-md-6 col-12">
										<label htmlFor="last-name">
											Last Name
										</label>
										<input
											type="text"
											className="form-control"
											id="last-name"
											name="last-name"
										/>
									</div>
								</div>
								<div className="row pb-4">
									<div className="col-md-6 col-12">
										<label htmlFor="account-email">
											Email
										</label>
										<input
											type="text"
											className="form-control"
											id="account-email"
											name="account-email"
										/>
									</div>
									<div className="col-md-6 col-12">
										<label htmlFor="account-username">
											Username
										</label>
										<input
											type="text"
											className="form-control"
											id="account-username"
											name="account-username"
										/>
									</div>
								</div>
							</form>
						</div>
						<div
							className="tab-pane fade"
							id="security"
							role="tabpanel"
						>
							<form>
								<h5 className="pb-2">Account Security</h5>
								<div className="row pb-4">
									<div className="col-lg-6 col-12">
										<label htmlFor="password-reset">
											Password Reset
										</label>
										<button
											type="button"
											className="btn btn-primary d-block w-75"
											id="password-reset"
											name="password-reset"
										>
											Reset My Password
										</button>
									</div>
									<div className="col-lg-6 col-12">
										<label htmlFor="2fa">
											2-Factor Authentication
										</label>
										<button
											type="button"
											className="btn btn-primary d-block w-75"
											id="2fa"
											name="2fa"
										>
											Enable 2-Factor Authentication
										</button>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-12">
										<label htmlFor="delete-account">
											Delete Account
										</label>
										<button
											type="button"
											className="btn btn-danger d-block w-75"
											id="delete-account"
											name="delete-account"
										>
											Delete My Account
										</button>
									</div>
								</div>
							</form>
						</div>
						<div
							className="tab-pane fade"
							id="notifications"
							role="tabpanel"
						>
							<form>
								<h5 className="pb-2">My Notifications</h5>
								<NotificationList />
								<h5>Enable Notifications</h5>
								<div className="row">
									<div className="col-md-6 col-12">
										<div className="form-check form-switch">
											<input
												className="form-check-input"
												type="checkbox"
												id="toggle-notifications"
												name="toggle-notifications"
												checked={enableNotifications}
												onChange={() => {
													setEnableNotifications(
														!enableNotifications
													);
												}}
											/>
											<label htmlFor="toggle-notifications">
												{enableNotifications ? (
													<i className="bi bi-bell-fill"></i>
												) : (
													<i className="bi bi-bell-slash-fill"></i>
												)}{" "}
												Notifications
											</label>
										</div>
									</div>
								</div>
							</form>
						</div>
						<div
							className="tab-pane fade"
							id="help"
							role="tabpanel"
						>
							Help
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserSettings;
