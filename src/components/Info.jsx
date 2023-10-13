import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

const url = "https://course-api.com/react-tabs-project";

const Info = ({ companyData }) => {
  const { id, title, dates, duties, company } = companyData;
  //   console.log(id, title, duties, company);
  return (
    <article className="info">
      <h1 className="job-title">{title}</h1>
      <span className="company-name">{company}</span>
      <p className="date">{dates}</p>
      {duties.map((duty, idx) => {
        return (
          <div key={idx} className="duty-container">
            <FaAnglesRight />
            <p className="duty">{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Info;
