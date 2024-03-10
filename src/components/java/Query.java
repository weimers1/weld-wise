package components.java;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.ArrayList;

public class Query {
    // define connection string and create connection attribute
    private String connectionString = "jdbc:sqlserver://localhost:1433;encrypt=true;Database=dev;integratedSecurity=true;trustServerCertificate=true";
    private Connection connection;

    public Query() {
        try {
            // create a connection to the database
            this.connection = DriverManager.getConnection(this.connectionString);
        } catch (SQLException e) {
            System.out.println("Error connecting to database.");
            e.printStackTrace();
        }
    }

    public ArrayList<HashMap<String, String>> execute(String query) {
        // create an ArrayList of HashMap in which to store the data and return later
        ArrayList<HashMap<String, String>> results = new ArrayList<HashMap<String, String>>();

        try {
            // create a statement
            Statement statement = this.connection.createStatement();

            // save the results of the executed query
            ResultSet resultSet = statement.executeQuery(query);

            // get results metadata
            ResultSetMetaData resultSetMetaData = resultSet.getMetaData();

            // loop over results to print data
            while (resultSet.next()) {
                HashMap<String, String> row = new HashMap<String, String>();
                for (int i = 1; i <= resultSetMetaData.getColumnCount(); i++) {
                    row.put(resultSetMetaData.getColumnName(i), resultSet.getString(i));
                }
                results.add(row);
            }

            return results;
        } catch (SQLException e) {
            // if there are any issues, print them
            System.out.println("Error executing query.");
            e.printStackTrace();

            // return empty results if something fails
            return results;
        }
    } 
}
