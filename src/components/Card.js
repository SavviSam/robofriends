import React from "react";

const Card = ({ name, id, email }) => {
  return (
    <>
      <div className="bg-washed-yellow dib br3 pa3 ma2 grow shadow-5 tc ba">
        <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
        <div>
          <h2>{name}</h2>
          <p>{email} </p>
        </div>
      </div>
    </>
  );
};
export default Card;
