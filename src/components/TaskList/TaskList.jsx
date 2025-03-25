import React from "react";
import styles from "./TaskList.module.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../../store/taskSlice";
import Button from "../Button/Button";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const { data: weather } = useSelector((state) => state.weather);

  const handleDelete = (task) => {
    window.confirm("Are you sure you want to delete this task?") &&
      dispatch(deleteTask(task));
  };

  return tasks.length === 0 ? (
    <h2>Start with your first task.</h2>
  ) : (
    <div className={styles.taskList}>
      {tasks.map((task, i) => (
        <div className={styles.task} key={task + i}>
          <h3>{task.task}</h3>
          <div className={styles.taskRight}>
            <p>{task.priority}</p>

            <Button
              onClick={() => {
                handleDelete(task.task);
              }}
            >
              Delete
            </Button>
          </div>
          <div className={styles.weather}>
            <p>{weather?.main.temp}°C</p>
            <p>{weather?.weather[0].description}</p>{" "}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TaskList;
