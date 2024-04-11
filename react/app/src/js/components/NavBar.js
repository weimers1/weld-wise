import Home from "../pages/Home.js";
import Test from "../pages/Test.js";
import Faq from "../pages/Faq";

import logo from "../../images/weld-wise.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const user_info = {
	name: "Sam Weimer",
};

export function NavBar() {
	return (
		<>
			<BrowserRouter>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link className="nav-link navbar-brand" to={"/"}>
						<img src={logo} className="img-fluid" lt="Weld WISE" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
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
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/faq"}>
									FAQ
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={"/test"}>
									Test
								</Link>
							</li>
						</ul>
					</div>
				</nav>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/faq" element={<Faq />} />
					<Route path="/test" element={<Test />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default NavBar;
