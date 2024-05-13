export function AccountInfoModal({ userInfo, updateUserInfo }) {
	return (
		<div className="modal text-light" id="account-info-modal">
			<div className="modal-dialog modal-xl shadow">
				<div className="modal-content border-ww-dark">
					<div className="modal-header bg-ww-dark border-ww-dark">
						<h5 className="pb-2">Update Account Information</h5>
					</div>
					<div className="modal-body bg-ww-light">
						<form>
							<div className="row pb-4">
								<div className="col-lg-6 col-12">
									<label htmlFor="first-name">
										First Name
									</label>
									<input
										type="text"
										className="form-control"
										id="first-name"
										name="first-name"
										defaultValue={userInfo.firstName}
										autoComplete="given-name"
									/>
								</div>
								<div className="col-lg-6 col-12">
									<label htmlFor="last-name">Last Name</label>
									<input
										type="text"
										className="form-control"
										id="last-name"
										name="last-name"
										defaultValue={userInfo.lastName}
										autoComplete="family-name"
									/>
								</div>
							</div>
							<div className="row pb-4">
								<div className="col-lg-6 col-12">
									<label htmlFor="account-email">Email</label>
									<input
										type="text"
										className="form-control"
										id="account-email"
										name="account-email"
										defaultValue={userInfo.email}
										autoComplete="email"
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer bg-ww-dark border-ww-dark">
						<button
							type="button"
							className="btn btn-success shadow-sm"
							data-bs-dismiss="modal"
							onClick={() => {
								// get updated user info
								const newUserInfo = {
									firstName:
										document.getElementById("first-name")
											.value,
									lastName:
										document.getElementById("last-name")
											.value,
									email: document.getElementById(
										"account-email"
									).value,
								};

								// trigger update in parent component
								updateUserInfo(newUserInfo);
							}}
						>
							<i className="bi bi-floppy-fill"></i>&nbsp; Save
						</button>
						<button
							type="button"
							className="btn btn-danger shadow-sm"
							data-bs-dismiss="modal"
							onClick={() => {
								// reset all fields to the incoming user info
								document.getElementById("first-name").value =
									userInfo.firstName;
								document.getElementById("last-name").value =
									userInfo.lastName;
								document.getElementById("account-email").value =
									userInfo.email;
							}}
						>
							<i className="bi bi-x-lg"></i> Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AccountInfoModal;
