import "../../css/notification-list.css";
import { useState } from "react";

export function NotificationList() {
	// notifications
	let [notifications, setNotifications] = useState([
		{
			id: 1,
			read: false,
			title: "New Notification",
			message: "This is your new notification",
		},
		{
			id: 2,
			read: true,
			title: "Test notification",
			message: "This is a test notification",
		},
		{
			id: 3,
			read: true,
			title: "Test Notification 2 with a longer title to test the ellipses cutoff on long text and smaller screens",
			message:
				"This is another test notification also with a really long text to test the cutoff on long text and small screens",
		},
	]);

	// set the indeterminate flag for the #check-all checkbox
	let [isIndeterminate, setIsIndeterminate] = useState(false);

	function clickedCheckAll(event) {
		// if #check-all is checked and not indeterminate, select all; otherwise, deselect all
		setAllCheckboxes(event.target.checked && !isIndeterminate);

		// unflag indeterminate
		setIndeterminate(false);
		return;
	}

	function setAllCheckboxes(status) {
		// set all checkboxes to status
		Array.from(
			document.getElementsByClassName("notification-checkbox")
		).forEach((checkbox) => {
			checkbox.checked = status;
		});

		// set #check-all checked to status
		document.getElementById("check-all").checked = status;
	}

	function setIndeterminate(status) {
		// get #check-all box
		const checkAll = document.getElementById("check-all");

		// update status of indeterminate flag in JS and DOM
		setIsIndeterminate(status);
		checkAll.indeterminate = status;
	}

	function clickedCheckbox() {
		// get all checkboxes
		const allCheckboxes = document.querySelectorAll(
			".notification-checkbox"
		);

		// get #check-all checkbox
		const checkAll = document.getElementById("check-all");

		// check if all or no checkboxes are checked
		const allChecked = Array.from(allCheckboxes).every(
			(checkbox) => checkbox.checked
		);
		const noneChecked = Array.from(allCheckboxes).every(
			(checkbox) => !checkbox.checked
		);

		// set #check-all checkbox state
		checkAll.checked = allChecked;
		checkAll.indeterminate = !allChecked && !noneChecked;

		// update indeterminate state
		setIndeterminate(!allChecked && !noneChecked);
	}

	function openNotification(event) {
		console.log(event);
	}

	return (
		<div className="row pb-4">
			<div className="col-12" id="notification-list">
				<table className="table table-hover">
					<thead>
						<tr>
							<th colSpan={2}>
								<input
									type="checkbox"
									className="form-check-input"
									id="check-all"
									onClick={clickedCheckAll}
								/>
								<a
									type="button"
									className="ms-4"
									id="mark-as-read"
								>
									<i className="bi bi-envelope-open-fill"></i>
								</a>
								<a type="button" className="ms-4" id="delete">
									<i className="bi bi-trash-fill"></i>
								</a>
							</th>
						</tr>
					</thead>
					<tbody>
						{notifications.map((notification) => {
							return (
								<tr
									key={notification.id}
									className="user-select-none"
								>
									<td width={"5%"}>
										<input
											type="checkbox"
											className="form-check-input notification-checkbox"
											id={
												"select-notification-" +
												notification.id
											}
											onClick={clickedCheckbox}
										/>
									</td>
									<td
										className="col-lg-4 col-12 notification-title ms-2 pe-2 text-nowrap overflow-hidden"
										onClick={openNotification}
									>
										{notification.title}
									</td>
									<td
										className="col-lg-7 col-12 notification-message ms-2 text-nowrap overflow-hidden"
										onClick={openNotification}
									>
										{notification.message.substring()}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default NotificationList;
