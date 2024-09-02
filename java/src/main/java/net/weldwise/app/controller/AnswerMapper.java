package net.weldwise.app.controller;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;
import net.weldwise.app.model.Answer;

public class AnswerMapper implements RowMapper<Answer> {
	public Answer mapRow(ResultSet resultSet, int rowNum) throws SQLException {
		Answer answer = new Answer();

		answer.setAnswerID(resultSet.getInt("answer_id"));
		answer.setQuestionID(resultSet.getInt("question_id"));
		answer.setText(resultSet.getString("text"));
		
		return answer;
	}
}
