// components
import NotificationList from "./NotificationList";
import { useState } from "react";

export function NotificationPane() {
	// enable notifications
	let [enableNotifications, setEnableNotifications] = useState(true);

	return (
		<div className="tab-pane fade" id="notifications" role="tabpanel">
			<form>
				<h5 className="pb-2">My Notifications</h5>
				<NotificationList />
				<div className="row">
					<div className="col-md-6 col-12">
						<h5>Enable Notifications</h5>
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
	);
}

export default NotificationPane;
