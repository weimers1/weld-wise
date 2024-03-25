package net.weldwise.app.model;

public class Answer {
    private int questionID;
    private int answerID;
    private String text;
    
    public Answer(int questionID, int answerID, String text) {
        this.questionID = questionID;
        this.answerID = answerID;
        this.text = text;
    }

    public int getQuestionID() {
        return this.questionID;
    }

    public int getAnswerID() {
        return this.answerID;
    }

    public String getText() {
        return this.text;
    }
}
