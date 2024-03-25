package net.weldwise.app.model;

import java.util.ArrayList;

public class Question {
    private String question;
    private int questionID;
    private ArrayList<Answer> answers;
    
    public Question(String question, int questionID, ArrayList<Answer> answers) {
        this.question = question;
        this.questionID = questionID;
        this.answers = answers;
    }

    @Override
    public String toString() {
        String questionInfo = this.questionID + ": " + this.question + "\nAnswers:";
        
        for (Answer answer : this.answers) {
            questionInfo += "\n" + answer.getAnswerID() + ": " + answer.getText();
        }

        return questionInfo;
    }
}
