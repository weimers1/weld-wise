export function ProgressBar() {
	return (
		<div
			className="progress mt-4"
			role="progressbar"
			aria-label="Example with label"
		>
			<div className="progress-bar bg-ww-orange" style={{ width: "10%" }}>
				10%
			</div>
		</div>
	);
}

export default ProgressBar;
