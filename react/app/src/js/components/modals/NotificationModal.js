export function NotificationModal({ notification }) {
	return (
		<div className="modal text-black" id="notification-modal">
			<div className="modal-dialog modal-xl shadow">
				<div className="modal-content">
					<div className="modal-header">
						<div className="col-8">
							<h5 className="modal-title">
								{notification.title}
							</h5>
						</div>
						<div className="col-4 text-end">
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
							></button>
							<p>{notification.datetime}</p>
						</div>
					</div>
					<div className="modal-body">{notification.message}</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-danger shadow-sm"
							data-bs-dismiss="modal"
						>
							<i className="bi bi-x-lg"></i> Dismiss
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NotificationModal;
