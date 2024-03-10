package main.java.request;

import components.java.Query;

public class Main {
    public static void main(String[] args) {
        Query query = new Query();

        System.out.println(query.execute("""
            select
                test1,
                test2
            from
                TEST_TABLE
        """));
    }
}