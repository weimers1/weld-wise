import Question from "../components/Question.js";

export function Test() {
	return (
		<>
			<div className="row">
				<div className="col-xs-12">this is the testing page</div>
			</div>

			<Question></Question>

			<div className="row float-end">
				<div className="col-xs-12">
					<div className="btn-group">
						<button type="button" className="btn btn-primary">
							Previous
						</button>
						<button type="button" className="btn btn-primary">
							Next
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Test;
