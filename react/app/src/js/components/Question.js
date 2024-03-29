const question_data = {
	id: 1,
	text: "Test question text",
	answers: [
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
	const choices = [];
	for (let i = 0; i < question_data.answers.length; i++) {
		const answer = question_data.answers[i];
		choices.push(
			<li className="list-group-item" key={answer.id}>
				<input
					type="radio"
					id={"option-" + answer.id}
					name="test-question"
					value={answer.id}
					onClick={handleClick}
				/>
				<label htmlFor={"option-" + answer.id}>
					&nbsp;{answer.text}
				</label>
			</li>
		);
	}
	return choices;
}

export function Question() {
	return (
		<div className="row">
			{question_data.text}
			<ul className="list-group">{getAnswerChoices()}</ul>
		</div>
	);
}

function handleClick(event) {
	console.log(event);
}

export default Question;
