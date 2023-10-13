import React, { useEffect } from "react";
import Info from "./Info";
import Company from "./Company";
import { useState } from "react";

const url = "https://course-api.com/react-tabs-project";

const Tabs = () => {
  const [companyData, setCompanyData] = useState([]);
  const [showCompany, setShowCompany] = useState(0);
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(url);
      const dataJson = await data.json();
      setCompanyData(dataJson);
      setIsLoading(false);
      setList(
        dataJson.map((d) => {
          //   console.log(d.company);
          return d.company;
        })
      );
    };
    getData();
  }, []);
  //   !isLoading && console.log(companyData);
  return (
    !isLoading && (
      <section className="container">
        <Company
          list={list}
          showCompany={showCompany}
          setShowCompany={setShowCompany}
        />
        <Info companyData={companyData[showCompany]} />
      </section>
    )
  );
};

export default Tabs;
