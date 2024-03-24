package com.personalprojects.TodoList.Controller;

import com.personalprojects.TodoList.Model.TodoItem;
import com.personalprojects.TodoList.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/todo")
@CrossOrigin
public class TodoListController {
    @Autowired
    private TodoService todoservice;
    @PostMapping("/add")
    public String add(@RequestBody TodoItem item) {
        todoservice.saveTodoItem(item);
        return "New item added succesfully";
    }

    @GetMapping("/list")
    public List<TodoItem> list() {
        return todoservice.showList();
    }
}
