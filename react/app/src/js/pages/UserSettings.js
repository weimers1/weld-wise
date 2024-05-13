// components
import AccountPane from "../components/user/settings/AccountPane";
import SecurityPane from "../components/user/settings/SecurityPane";
import NotificationPane from "../components/user/settings/NotificationPane";
import HelpPane from "../components/user/settings/HelpPane";

// styles
import "../../css/user-settings.css";

export function UserSettings() {
	return (
		<div className="card mt-4 shadow-sm" id="user-settings">
			<div className="card-body">
				<div className="d-flex">
					<div
						className="nav flex-column nav-pills user-select-none"
						role="tablist"
					>
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
						<AccountPane />
						<SecurityPane />
						<NotificationPane />
						<HelpPane />
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserSettings;
