import Link from "next/link";

const OurSolution = (props) => {
  return (
    <div className="solution-section">
      <div className="container">
        <div className="solution-content d-flex flex-wrap justify-space-between align-items-center">
          <div className="title white-text w-70">
            <h2>{props.data.ourSolutionsTitle}</h2>
            <div className="sub-title ">{props.data.ourSolutionsDescription}
            </div>
          </div>
          <div className="fill">
            <Link href={props.data.ourSolutionsButton.url}>{props.data.ourSolutionsButton.title}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
