package net.weldwise.app.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.weldwise.app.model.Answer;
import net.weldwise.app.model.Question;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    @RequestMapping("/get")
    public String getQuestionTest() {
        ArrayList<Answer> answers = new ArrayList<Answer>();

        answers.add(new Answer(1, 1, "test"));
        answers.add(new Answer(1, 2, "test 2"));
        answers.add(new Answer(1, 3, "test 3"));

        return (new Question("test", 1, answers)).toString();
    }
}
