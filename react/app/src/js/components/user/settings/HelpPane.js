// components
import { Link } from "react-router-dom";
import ReportProblemModal from "../../modals/ReportProblemModal";

export function HelpPane() {
	return (
		<>
			<div className="tab-pane fade" id="help" role="tabpanel">
				<form>
					<h5 className="pb-2">Help Center</h5>
					<ul className="list-unstyled lg-w-50">
						<li className="p-2">
							<label htmlFor="faq-link">
								Frequently Asked Questions
							</label>
							<Link className="nav-link" to={"/faq"}>
								<button
									type="button"
									className="btn btn-ww-light d-block w-75 shadow"
									id="faq-link"
									name="faq-link"
								>
									<i className="bi bi-question-circle-fill"></i>{" "}
									FAQ Page
								</button>
							</Link>
						</li>
						<li className="p-2">
							<span>Contact Us</span>
							<ul className="list-unstyled">
								<li className="p-2">
									<i className="bi bi-telephone-fill"></i>{" "}
									(607) 329-1415
								</li>
								<li className="p-2">
									<i className="bi bi-phone-fill"></i> (607)
									329-1415
								</li>
								<li className="p-2">
									<i className="bi bi-envelope-at-fill"></i>{" "}
									<a href="mailto:jweimer@weld-wise.com">
										jweimer@weld-wise.com
									</a>
								</li>
							</ul>
						</li>
						<li className="p-2">
							<label htmlFor="report-problem">Issues?</label>
							<button
								type="button"
								className="btn btn-danger d-block w-75 shadow"
								id="report-problem"
								name="report-problem"
								data-bs-toggle="modal"
								data-bs-target="#report-problem-modal"
							>
								<i className="bi bi-exclamation-triangle-fill"></i>{" "}
								Report a Problem
							</button>
						</li>
					</ul>
				</form>
			</div>

			<ReportProblemModal />
		</>
	);
}

export default HelpPane;
