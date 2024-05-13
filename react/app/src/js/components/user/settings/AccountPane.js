// components
import AccountInfoModal from "../../modals/AccountInfoModal";
import { useState } from "react";

export function AccountPane() {
	// user info
	let [userInfo, setUserInfo] = useState({
		firstName: "Sam",
		lastName: "Weimer",
		email: "email@address.com",
		username: "user123",
	});

	return (
		<div className="tab-pane fade show active" id="account" role="tabpanel">
			<h5 className="pb-2">Account Information</h5>
			<div className="row pb-4">
				<div className="col-md-6 col-12">
					<span className="text-black-50">First Name</span>
					<p>{userInfo.firstName}</p>
				</div>
				<div className="col-md-6 col-12">
					<span className="text-black-50">Last Name</span>
					<p>{userInfo.lastName}</p>
				</div>
			</div>
			<div className="row pb-4">
				<div className="col-md-6 col-12">
					<span className="text-black-50">Email</span>
					<p>{userInfo.email}</p>
				</div>
				<div className="col-md-6 col-12">
					<span className="text-black-50">Username</span>
					<p>{userInfo.username}</p>
				</div>
			</div>
			<div className="row">
				<div className="col-md-6 col-12">
					<button
						type="button"
						className="btn btn-ww-light"
						data-bs-toggle="modal"
						data-bs-target="#account-info-modal"
					>
						<i className="bi bi-arrow-repeat"></i> Update
						Information
					</button>
				</div>
			</div>

			<AccountInfoModal
				userInfo={userInfo}
				updateUserInfo={(updatedUserInfo) => {
					// update user info to overwrite new keys
					setUserInfo({
						...userInfo,
						...updatedUserInfo,
					});
				}}
			/>
		</div>
	);
}

export default AccountPane;
