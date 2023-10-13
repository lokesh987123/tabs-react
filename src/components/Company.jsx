import React from "react";
const Company = ({ list, setShowCompany, showCompany }) => {
  //   console.log({ list, setShowCompany });
  const handleClick = (e, item) => {
    list.forEach((name, idx) => {
      if (item === name) {
        setShowCompany(idx);
      }
    });
  };
  return (
    <article className="company-list">
      {list.map((items, idx) => {
        return (
          <button
            className={showCompany === idx ? "selected" : ""}
            onClick={(e) => handleClick(e, items)}
            key={items}
          >
            {items}
          </button>
        );
      })}
    </article>
  );
};

export default Company;
