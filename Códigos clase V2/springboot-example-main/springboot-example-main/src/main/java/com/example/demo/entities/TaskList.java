package com.example.demo.entities;

import java.util.ArrayList;
import java.util.List;

public class TaskList {

    private String name;
    private List<Task> taskList;

    public TaskList(String name){
        this.setName(name);
        this.taskList = new ArrayList<Task>();
    }

    public void addTask(Task task){
        this.taskList.add(task);
    }

    public List<Task> getTaskList(){
        return this.taskList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
