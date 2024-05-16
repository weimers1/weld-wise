import NotificationList from "../components/user/settings/NotificationList";

export function Home({ userInfo }) {
	return (
		<>
			<h4 className="pt-3">Welcome to the Weld WISE Testing Site</h4>
			{userInfo.loggedIn ? (
				<>
					<h5>My Notifications</h5>
					<NotificationList />
					<div className="row pb-4">
						<div className="col-lg-4 col-12 pb-2">
							<h5>My Current Tests</h5>
							<div className="card test-list shadow">
								<ul className="list-group list-group-flush">
									<li className="list-group-item bg-light">
										Test 1
									</li>
									<li className="list-group-item bg-light">
										Test 2
									</li>
									<li className="list-group-item bg-light">
										Test 3
									</li>
									<li className="list-group-item bg-light">
										Test 4
									</li>
									<li className="list-group-item bg-light">
										Test 5
									</li>
									<li className="list-group-item bg-light">
										Test 6
									</li>
									<li className="list-group-item bg-light">
										Test 7
									</li>
									<li className="list-group-item bg-light">
										Test 8
									</li>
									<li className="list-group-item bg-light">
										Test 9
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-12 pb-2">
							<h5>My Previous Tests</h5>
							<div className="card test-list shadow">
								<ul className="list-group list-group-flush">
									<li className="list-group-item bg-light">
										Test 1
									</li>
									<li className="list-group-item bg-light">
										Test 2
									</li>
									<li className="list-group-item bg-light">
										Test 3
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-4 col-12 pb-2">
							<h5>All Available Tests</h5>
							<div className="card test-list shadow">
								<ul className="list-group list-group-flush">
									<li className="list-group-item bg-light">
										Test 1
									</li>
									<li className="list-group-item bg-light">
										Test 2
									</li>
									<li className="list-group-item bg-light">
										Test 3
									</li>
								</ul>
							</div>
						</div>
					</div>
				</>
			) : (
				<div className="row">
					<div className="col-12">
						<div className="alert alert-info mt-4 shadow">
							Please log in to view test information.
						</div>
					</div>
				</div>
			)}
			<div className="row pt-2 pb-4">
				<div className="col-12">
					<label className="d-block">
						Looking for our main website?
					</label>
					<a
						href="https://weld-wise.com"
						className="text-light no-underline"
					>
						<button
							type="button"
							className="btn btn-ww-orange shadow"
							id="link-to-main"
						>
							Main Website
						</button>
					</a>
				</div>
			</div>
		</>
	);
}

export default Home;
