import { Link } from "react-router-dom";

export function PageNotFound() {
	return (
		<>
			<p className="py-4 fs-3">
				Oops! The page you are looking for could not be found.
			</p>
			<Link className="nav-link" to={"/"}>
				<button className="btn btn-ww-orange shadow" type="button">
					<i className="bi bi-house-fill"></i> Return to Home
				</button>
			</Link>
		</>
	);
}

export default PageNotFound;
