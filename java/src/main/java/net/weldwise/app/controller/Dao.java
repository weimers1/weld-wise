package net.weldwise.app.controller;

import java.sql.SQLException;
import java.util.List;

public interface Dao<T> {
	// create
	int insert(T item) throws SQLException;
	
	// read
	T get(int id) throws SQLException;

	List<T> getAll() throws SQLException;

	// update... obvi
	int update(T item) throws SQLException;

	// delete
	int delete(T item) throws SQLException;
}
