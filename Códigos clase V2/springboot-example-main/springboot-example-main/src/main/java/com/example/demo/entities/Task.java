package com.example.demo.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="task")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public long id;
    @Column(name="description")
    private String description;
    @Column(name="done")
    private Boolean done;
    @Column(name="dueDate")
    private LocalDate dueDate;

    public Task() {
    }

    public Task(String description, Boolean done, LocalDate dueDate){
        this.description = description;
        this.done = done;
        this.dueDate = dueDate;
    }

    public String getDescription(){
        return this.description;
    }

    public void setDescription(String description){
        this.description = description;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }
}
