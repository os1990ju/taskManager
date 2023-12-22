import React from "react";
import PropTypes from "prop-types";
import "./TaskColumn.scss";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, image }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={image} alt="todo" /> {title}
      </h2>
      <TaskCard />
    </section>
  );
};

TaskColumn.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
export default TaskColumn;
