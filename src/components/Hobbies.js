import React from "react";

const Hobbies = () => {
  const hobbies = [
    {
      hobby: "Reading",
      src: "images/reading-man.jpg",
      about: "Lorem ipsum dolor sit amet dolor",
    },
    {
      hobby: "Walking",
      src: "images/walking-man.jpg",
      about: "Lorem ipsum dolor sit amet dolor",
    },
    {
      hobby: "Swimming",
      src: "images/swimming-man.jpg",
      about: "Lorem ipsum dolor sit amet dolor",
    },
  ];

  return (
    <div className="Hobbies card">
      <h2>Hobbies</h2>

    {
       hobbies.map(({hobby, src, about}, index) => (

        
        <li key={index}>
            <img src={src} alt="img" />
            <h4>{hobby}</h4>
            <p>{about}</p>

        </li>
    )) 
    }
        
    

    </div>
  );
};

export default Hobbies;
