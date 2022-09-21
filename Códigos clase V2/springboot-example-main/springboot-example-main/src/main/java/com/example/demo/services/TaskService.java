package com.example.demo.services;

import com.example.demo.entities.Task;
import com.example.demo.entities.TaskList;
import com.example.demo.repositories.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class TaskService {
    private TaskRepository repository;

    public TaskService(TaskRepository repository){
        this.repository = repository;
    }

    public List<Task> getTaskList(){
        return this.repository.findAll();
    }

    public Task createTask(Task newTask){
        return this.repository.save(newTask);
    }

    public Boolean markTaskAsFinished(Long id){
        Optional<Task> task = this.repository.findById(id);
        if(task.isPresent()){
            task.get().setDone(true);
            this.repository.save(task.get());
            return true;
        }

        return false;
    }

    public Boolean deleteTask(Long id){
        this.repository.deleteById(id);
        return true;
    }

}
