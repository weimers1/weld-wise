package net.weldwise.app.controller;

import java.util.List;

import org.springframework.stereotype.Controller;

import net.weldwise.Database;
import net.weldwise.app.model.Answer;

@Controller
public class AnswerDao implements Dao<Answer> {
	AnswerMapper answerMapper = new AnswerMapper();
	
	// create
	public int insert(Answer item) {
		return -1;
	}
	
	// read
	public Answer get(int id) {
		return null;
	}

	public List<Answer> getAll() {
		return Database.jdbcTemplate.query("select * from answers", answerMapper);
	}

	// update... obvi
	public int update(Answer item) {
		return -1;
	}

	// delete
	public int delete(Answer item) {
		return -1;
	}
}
