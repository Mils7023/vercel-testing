import Link from "next/link";

const GetInTouch = (props) => {
  const { data } = props;

  return (
    <>
      <div className="title white-text">
        <h2>{data?.getInTouchTiitle}</h2>
        <div className="sub-title">
          {data?.getInTouchDescription}
        </div>
      </div>
      <button className="fill">
        <Link  href="/contact-us">
          {data?.getInTouchLink.title}
        </Link>
      </button>
    </>
  );
};

export default GetInTouch;
