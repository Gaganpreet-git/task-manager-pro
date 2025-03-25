import React, { useState } from "react";
import styles from "./TaskInput.module.css";
import Form from "../Form/Form";
import { useDispatch } from "react-redux";
import { addTask } from "../../../store/taskSlice";

const TaskInput = () => {
  const initialState = {
    task: "",
    priority: "low",
  };

  const [task, setTask] = useState(initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.task.trim()) {
      alert("Please enter a task");
      return;
    }

    dispatch(addTask(task));
    setTask(initialState);
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  // Form inputs
  const taskInputs = [
    {
      type: "text",
      name: "task",
      value: task.task,
      placeholder: "Enter task,  e.g. Buy groceries",
    },
    {
      type: "select",
      name: "priority",
      value: task.priority,
      options: ["Low", "Medium", "High"],
    },
  ];

  return (
    <div className={styles.taskInput}>
      <Form
        className={styles.form}
        inputs={taskInputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        buttonLabel="Add Task"
      />
      ;
    </div>
  );
};

export default TaskInput;
