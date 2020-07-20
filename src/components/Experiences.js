import React from "react";

const Experiences = () => {
  const experiences = [
    {
      logo: "images/logo-placeholder.jpg",
      time: "October 2017 - Current",
      position: "Full-stack developer",
      company: "Orix Empire Investment",
      about: "Lorem ipsum dolor, sit amet consituer dolror malavenish",
    },
  ];

  return (
    <div className="Experiences card">
      <h3>Experiences</h3>

      {experiences.map(({ logo, time, position, about, company }, index) => (
        <li key={index}>
          <div className="image">
            <img src={logo} alt="logo" />
          </div>

          <div>
            <p>{time}</p>

            <p>{company}</p>

            <h4>{position}</h4>

            <p>{about}</p>
          </div>
        </li>
      ))}
    </div>
  );
};

export default Experiences;
