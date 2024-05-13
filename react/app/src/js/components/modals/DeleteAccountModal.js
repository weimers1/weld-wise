export function DeleteAccountModal() {
	return (
		<div className="modal" id="delete-account-modal">
			<div className="modal-dialog shadow">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="pb-2 text-danger">Delete My Account</h5>
					</div>
					<div className="modal-body">
						<p>
							Are you sure you would like to{" "}
							<b className="text-danger">delete your account</b>?
							<br />
							<b>This cannot be undone.</b>
						</p>
					</div>
					<div className="modal-footer justify-content-start">
						<div className="row w-100">
							<div className="col-lg-6 col-12 mb-small-screens">
								<button
									type="button"
									className="btn btn-danger shadow-sm w-100"
								>
									<i className="bi bi-person-x-fill"></i> Yes,
									delete my account
								</button>
							</div>
							<div className="col-lg-6 col-12">
								<button
									type="button"
									className="btn btn-ww-light shadow-sm w-100"
									data-bs-dismiss="modal"
								>
									<i className="bi bi-arrow-counterclockwise"></i>{" "}
									No, do not delete it
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DeleteAccountModal;
