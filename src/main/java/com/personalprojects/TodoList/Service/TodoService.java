package com.personalprojects.TodoList.Service;

import com.personalprojects.TodoList.Model.TodoItem;
import com.personalprojects.TodoList.Repository.TodoListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoListRepository listRepo;

    public TodoItem saveTodoItem(TodoItem todoitem) {
        return listRepo.save(todoitem);
    }
    public List<TodoItem> showList() { return listRepo.findAll(); }

}
