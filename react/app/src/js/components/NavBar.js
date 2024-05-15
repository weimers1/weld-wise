// pages
import Home from "../pages/Home";
import Test from "../pages/Test";
import Faq from "../pages/Faq";
import UserSettings from "../pages/UserSettings";
import PageNotFound from "../pages/PageNotFound";

// components
import LoginOptions from "./LoginOptions";
import LoginModal from "./modals/LoginModal";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

// inserts
import logo from "../../images/weld-wise.png";

export function NavBar() {
	const [userInfo, setUserInfo] = useState({
		loggedIn: true, // later change to check login status server side
		name: "Sam Weimer",
		userId: 123,
	});

	return (
		<>
			{/* user BrowserRouter to capture Links to other pages */}
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg navbar-dark bg-ww-dark w-100 shadow">
					<Link className="nav-link navbar-brand ps-2" to={"/"}>
						<img src={logo} className="img-fluid" alt="Weld WISE" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to={"/"}>
									<i className="bi bi-house-fill"></i> Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/faq"}>
									<i className="bi bi-question-circle-fill"></i>{" "}
									FAQ
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/test"}>
									<i className="bi bi-clipboard-check-fill"></i>{" "}
									Test
								</Link>
							</li>
						</ul>
						<ul className="navbar-nav ms-auto">
							{userInfo.loggedIn ? (
								<li className="nav-item">
									<Link
										className="dropdown-item"
										to={"/user/settings"}
									>
										<span className="badge bg-ww-orange mt-2 me-2 shadow-sm">
											Logged In: {userInfo.name}
										</span>
									</Link>
								</li>
							) : (
								<></>
							)}
							<LoginOptions
								userInfo={userInfo}
								clickedLogOut={() => {
									setUserInfo({
										...userInfo,
										loggedIn: false,
									});
								}}
							/>
						</ul>
					</div>
				</nav>

				<div className="container">
					{/* navbar routes with paths from BrowserRouter's Links */}
					<Routes>
						<Route
							path="/"
							element={<Home userInfo={userInfo} />}
						/>
						<Route path="/faq" element={<Faq />} />
						<Route
							path="/test"
							element={<Test userInfo={userInfo} />}
						/>
						<Route
							path="/user/settings"
							element={<UserSettings />}
						/>

						{/* use star to capture all paths not recognized */}
						<Route path="*" element={<PageNotFound />} />
					</Routes>
				</div>
			</BrowserRouter>

			<LoginModal
				clickedLogIn={() => {
					// validate credentials in backend later
					setUserInfo({
						...userInfo,
						loggedIn: true,
					});
				}}
			/>
		</>
	);
}

export default NavBar;
