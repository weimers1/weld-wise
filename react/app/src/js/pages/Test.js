import ProgressBar from "../components/ProgressBar";
import Question from "../components/Question";

export function Test({ userInfo }) {
	if (!userInfo.loggedIn) {
		return (
			<div className="alert alert-info pt-4">
				You must be logged in to access the test.
			</div>
		);
	}

	return (
		<form>
			<ProgressBar />

			<Question />

			<div className="row float-end">
				<div className="col-xs-12">
					<div className="btn-group">
						<button type="button" className="btn btn-ww">
							Previous
						</button>
						<button type="button" className="btn btn-ww">
							Next
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default Test;
