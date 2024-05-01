const questions = [
	{
		id: 1,
		text: "Question 1?",
		answer: "Answer 1",
	},
	{
		id: 2,
		text: "Question 2?",
		answer: "Answer 2",
	},
	{
		id: 3,
		text: "Question 3?",
		answer: "Answer 3",
	},
];

export function Faq() {
	return (
		<>
			<h4 className="pt-3">Frequently Asked Questions</h4>
			<ul className="list-unstyled text-dark">
				{questions.map((question) => {
					return (
						<li
							className="list-group-item pt-3 shadow"
							key={question.id}
						>
							<div className="card">
								<div
									className="card-header bg-light-grey border-light-grey"
									id={"question-" + question.id}
									data-bs-toggle="collapse"
									data-bs-target={"#answer-" + question.id}
								>
									{question.text}
								</div>
								<div
									className="collapse"
									id={"answer-" + question.id}
								>
									<div className="card-body p-3">
										{question.answer}
									</div>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}

export default Faq;
