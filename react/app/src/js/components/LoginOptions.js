import { Link } from "react-router-dom";

export function LoginOptions(props) {
	return (
		<>
			<li
				className={
					"nav-item dropdown pe-2 " +
					(props.userInfo.loggedIn ? "" : "d-none")
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
				<ul
					className="dropdown-menu dropdown-menu-end"
					aria-labelledby="navbarDropdown"
				>
					<li>
						<Link className="dropdown-item" to={"/user/settings"}>
							<i className="bi bi-gear-fill"></i> Settings
						</Link>
					</li>
					<li>
						<a
							className="dropdown-item"
							role="button"
							onClick={props.clickedLogOut}
						>
							<i className="bi bi-box-arrow-right"></i> Log Out
						</a>
					</li>
				</ul>
			</li>
			<li
				className={
					"nav-item dropdown pe-2 " +
					(!props.userInfo.loggedIn ? "" : "d-none")
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
