package net.weldwise.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import net.weldwise.app.controller.AnswerDao;

@SpringBootApplication(exclude={DataSourceAutoConfiguration.class})
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

		AnswerDao answerDao = new AnswerDao();
		System.out.println(answerDao.getAll());
	}

}
