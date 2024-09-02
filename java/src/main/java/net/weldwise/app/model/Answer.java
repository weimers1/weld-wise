package net.weldwise.app.model;

public class Answer {
    private int questionID;
    private int answerID;
    private String text;

	public Answer() {}
    
    public Answer(int questionID, int answerID, String text) {
        this.questionID = questionID;
        this.answerID = answerID;
        this.text = text;
    }

    public int getQuestionID() {
        return this.questionID;
    }

	public void setQuestionID(int questionID) {
        this.questionID = questionID;
    }

    public int getAnswerID() {
        return this.answerID;
    }
	
	public void setAnswerID(int answerID) {
        this.answerID = answerID;
    }

    public String getText() {
        return this.text;
    }

	public void setText(String text) {
        this.text = text;
    }
	
	public String toString() {
		return "Question ID: " + this.questionID + "\nAnswer ID: " + this.answerID + "\nText: " + this.text + "\n";
	}
}
