package com.example.demo.controllers;

import com.example.demo.entities.Task;
import com.example.demo.entities.TaskList;
import com.example.demo.services.TaskService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.time.LocalDate;
import java.util.List;

@RestController
public class TaskController {
    TaskService service;

    public TaskController(TaskService service){
        this.service = service;
    }

//    @GetMapping("/tasks")
//    public List<Task> TaskList(){
//        return this.service.getTaskList();
//    }

    @PostMapping("/tasks")
    public RedirectView createTask(@ModelAttribute @DateTimeFormat(pattern = "YYYY-MM-DD") Task task, Model model){
        model.addAttribute(task);
        task.setDone(false);
        this.service.createTask(task);

        return new RedirectView("/tasks");
    }

    @PatchMapping("/tasks/{id}")
    public RedirectView updateTask(@PathVariable("id") Long id){
        this.service.markTaskAsFinished(id);
        return new RedirectView("/tasks");
    }

    @DeleteMapping("/tasks/{id}")
    public RedirectView deleteTask(@PathVariable("id") Long id){
        this.service.deleteTask(id);
        return new RedirectView("/tasks");
    }
}
