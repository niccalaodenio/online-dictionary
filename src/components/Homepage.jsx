import React from "react";

const Homepage = ({history}) => { 
  let recent = history.map((i,e) => <span key={e}>{i}</span>)
  return (
    <div className="homepage">
      <h1>Welcome to Online Dictionary</h1>
      <p>Type a word in the search box above to get its meaning</p>

      {/* <h2>Recent search word:</h2>
      {recent} */}
    </div>
  );
};

export default Homepage;
