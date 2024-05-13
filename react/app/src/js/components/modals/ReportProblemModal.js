import { useState } from "react";

export function ReportProblemModal() {
	// constants
	const maxMessageLength = 1000;

	// initial values
	let [selectedTopic, setSelectedTopic] = useState(-1);
	let [messageDesc, setMessageDesc] = useState("");

	return (
		<div className="modal text-light" id="report-problem-modal">
			<div className="modal-dialog modal-xl shadow">
				<div className="modal-content border-ww-dark">
					<div className="modal-header bg-ww-dark border-ww-dark">
						<h5 className="pb-2">Report a Problem</h5>
					</div>
					<div className="modal-body bg-ww-light">
						<form>
							<div className="row">
								<div className="col-12">
									<label htmlFor="report-problem-subject">
										Select the Topic
									</label>
									<select
										className="form-control"
										id="report-problem-subject"
										name="report-problem-subject"
										defaultValue={selectedTopic}
										onChange={(event) => {
											setSelectedTopic(
												event.target.value
											);
										}}
									>
										<option disabled value={-1}>
											Select a Topic
										</option>
										<option value={1}>Account</option>
										<option value={2}>Testing</option>
										<option value={3}>Website</option>
										<option value={4}>General</option>
										<option value={5}>Payment</option>
										<option value={6}>Other</option>
									</select>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<label htmlFor="report-problem-body">
										Describe the Issue
									</label>
									<textarea
										className="form-control"
										id="report-problem-body"
										name="report-problem-body"
										rows="7"
										maxLength={maxMessageLength}
										defaultValue={messageDesc}
										onInput={(event) => {
											setMessageDesc(event.target.value);
										}}
									></textarea>
									{messageDesc.length} / {maxMessageLength}
								</div>
							</div>
						</form>
					</div>
					<div className="modal-footer bg-ww-dark border-ww-dark">
						<button
							type="button"
							className="btn btn-success shadow-sm"
							data-bs-dismiss="modal"
						>
							<i className="bi bi-send-fill"></i> Send
						</button>
						<button
							type="button"
							className="btn btn-danger shadow-sm"
							data-bs-dismiss="modal"
							onClick={() => {
								setSelectedTopic(-1);
								document.getElementById(
									"report-problem-subject"
								).value = -1;
								setMessageDesc("");
								document.getElementById(
									"report-problem-body"
								).value = "";
							}}
						>
							<i className="bi bi-x-lg"></i> Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ReportProblemModal;
