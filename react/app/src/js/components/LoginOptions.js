import { Link } from "react-router-dom";

export function LoginOptions({ userInfo, clickedLogOut }) {
	return (
		<>
			<li
				className={
					"nav-item dropdown pe-2 " +
					(userInfo.loggedIn ? "" : "d-none")
				}
			>
				<a
					className="nav-link dropdown-toggle"
					href="#"
					id="navbarDropdown"
					role="button"
					data-bs-toggle="dropdown"
				>
					<i className="bi bi-person-fill"></i> Profile
				</a>
				<ul className="dropdown-menu dropdown-menu-end shadow">
					<li>
						<Link className="dropdown-item" to={"/user/settings"}>
							<i className="bi bi-gear-fill"></i> Settings
						</Link>
					</li>
					<li>
						<Link
							className="dropdown-item"
							to={"/"}
							onClick={() => {
								clickedLogOut();
							}}
						>
							<i className="bi bi-box-arrow-right"></i> Log Out
						</Link>
					</li>
				</ul>
			</li>
			<li
				className={
					"nav-item dropdown pe-2 " +
					(!userInfo.loggedIn ? "" : "d-none")
				}
			>
				<a
					className="nav-link"
					href="#"
					role="button"
					data-bs-toggle="modal"
					data-bs-target="#login-modal"
				>
					<i className="bi bi-box-arrow-in-right"></i> Log In
				</a>
			</li>
		</>
	);
}

export default LoginOptions;
