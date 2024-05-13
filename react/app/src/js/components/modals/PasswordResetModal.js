export function PasswordResetModal() {
	return (
		<>
			<div className="modal" id="password-reset-modal">
				<div className="modal-dialog shadow">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="pb-2">Reset My Password</h5>
						</div>
						<div className="modal-body">
							<p>
								Are you sure you would like to reset your
								password?
							</p>
						</div>

						<div className="modal-footer justify-content-start">
							<div className="row w-100">
								<div className="col-lg-6 col-12 mb-small-screens">
									<button
										type="button"
										className="btn btn-success shadow-sm w-100"
										data-bs-toggle="modal"
										data-bs-target="#password-link-modal"
									>
										<i className="bi bi-check-lg"></i> Yes,
										reset my password
									</button>
								</div>
								<div className="col-lg-6 col-12">
									<button
										type="button"
										className="btn btn-danger shadow-sm w-100"
										data-bs-dismiss="modal"
									>
										<i className="bi bi-x-lg"></i> No, do
										not reset it
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="modal fade" id="password-link-modal" tabIndex="-1">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="pb-2">Password Reset Link Sent</h5>
						</div>
						<div className="modal-body">
							A link to reset your password will be sent to your
							email shortly. If you do not see it, please check
							your spam or try again later.
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-ww-light shadow-sm"
								data-bs-dismiss="modal"
							>
								<i className="bi bi-check-lg"></i> Okay
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PasswordResetModal;
