package com.personalprojects.TodoList.Repository;

import com.personalprojects.TodoList.Model.TodoItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoListRepository extends JpaRepository<TodoItem, Integer> {
}
