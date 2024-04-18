import Question from "../components/Question";

export function Test({ userInfo }) {
	console.log(userInfo);
	if (!userInfo.loggedIn) {
		return (
			<div className="alert alert-info">
				You must be logged in to access the test.
			</div>
		);
	}

	return (
		<>
			<Question />

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
