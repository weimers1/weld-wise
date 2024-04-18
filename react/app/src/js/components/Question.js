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
	console.log(questionData);
	return questionData.answerChoices.map((answerChoice) => {
		return (
			<li className="list-group-item" key={answerChoice.id}>
				<input
					type="radio"
					id={"option-" + answerChoice.id}
					name="test-question"
					value={answerChoice.id}
					onClick={handleClick}
				/>
				<label htmlFor={"option-" + answerChoice.id}>
					&nbsp;{answerChoice.text}
				</label>
			</li>
		);
	});
}

export function Question() {
	return (
		<>
			<div className="row pt-2">
				<div className="col-xs-12">{questionData.text}</div>
			</div>
			<div className="row pb-2">
				<div className="col-xs-12">
					<ul className="list-group">{getAnswerChoices()}</ul>
				</div>
			</div>
		</>
	);
}

function handleClick(event) {
	console.log(event);
}

export default Question;
