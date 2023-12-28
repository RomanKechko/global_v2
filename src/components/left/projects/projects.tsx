import React from "react";
import s from "./projects.module.css";

const ProjectsLeft = () => {
  return (
    <div className={s.projects_left}>
      <h2 className={s.projects_title}>НАШИ ПРОЕКТЫ</h2>
      <span className={s.projects_border}></span>
      <p className={s.portfolio_description}>
        Мы обладаем большим навыком в области разработки и реализации сложных
        проектов
      </p>
    </div>
  );
};

export default ProjectsLeft;
