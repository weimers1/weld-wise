const questionData = {
	id: 1,
	text: "Test question text",
	answerChoices: [
		{
			id: 1,
			text: "Option 1",
		},
		{
			id: 2,
			text: "Option 2",
		},
		{
			id: 3,
			text: "Option 3",
		},
		{
			id: 4,
			text: "Option 4",
		},
	],
};

function getAnswerChoices() {
	return questionData.answerChoices.map((answerChoice) => {
		return (
			<label
				className="list-group-item question"
				htmlFor={"option-" + answerChoice.id}
				key={answerChoice.id}
			>
				<li>
					<input
						type="radio"
						id={"option-" + answerChoice.id}
						name="test-question"
						value={answerChoice.id}
						onClick={handleClick}
					/>
					&nbsp;{answerChoice.text}
				</li>
			</label>
		);
	});
}

export function Question() {
	return (
		<>
			<div className="row pt-4 pb-2">
				<div className="col-xs-12">{questionData.text}</div>
			</div>
			<div className="row pb-4">
				<div className="col-xs-12">
					<ul className="list-group list-unstyled shadow-sm">
						{getAnswerChoices()}
					</ul>
				</div>
			</div>
		</>
	);
}

function handleClick(event) {
	console.log(event);
}

export default Question;
