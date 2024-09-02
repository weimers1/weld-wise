package net.weldwise;

import javax.sql.DataSource;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

public class Database {
	public static JdbcTemplate jdbcTemplate;
	private static String driverClassName = "com.microsoft.sqlserver.jdbc.SQLServerDriver";
	private static String url = "jdbc:sqlserver://localhost:1433;encrypt=true;Database=dev;integratedSecurity=true;trustServerCertificate=true;";

	static {
		jdbcTemplate = new JdbcTemplate(getDataSource());
	}

	public static DataSource getDataSource() {
		DriverManagerDataSource ds = new DriverManagerDataSource();
		ds.setDriverClassName(driverClassName);
		ds.setUrl(url);
		return ds;
	}
}
