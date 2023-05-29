import React from "react";

const DiscriptionBtn = (props) => {
  return (
    <div className="main-title d-flex flex-wrap align-items-center justify-space-between pb-38">
      <div className="title-left w-80">
        <h2>{props.title}</h2>
        <div className="sub-title">
          
         {props.subTitle}
          
        </div>
      </div>
      <div className="title-right">
        <div className="fill">
          <a href="">View All</a>
        </div>
      </div>
    </div>
  );
};

export default DiscriptionBtn;
