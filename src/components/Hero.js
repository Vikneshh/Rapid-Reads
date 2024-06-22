//Responsible for showing Hero content of the webpage including search box and background images
import image from "../utils/photos/banner-bg.png";
import SearchBox from "./SearchBox";
import { useSelector } from "react-redux";
const Hero = () => {
  const category = useSelector((state) => state.category);
  return (
    <>
      <div className=" d-flex flex-fill heroHeight bgImage ">
        <div className="heroMainText mt-4">
          <h1 className=" text-center m-3 p-1  pb-1 lh-lg  text-bg-dark rounded-4 bg-opacity-50 bg-gradient">
            {" "}
            <span className=" bg-danger text-white p-1 rounded-3 letterSpacing">
              Let's share
            </span>{" "}
            <br />
            <span className="ms-4 mt-1 fs-3">
              Right Thing to Right People
            </span>{" "}
          </h1>
          <h5 className="lh-lg m-4 mt-0 p-5  text-white opacity-75 fs-5">
            Elevate your news experience with our daily feed. Snappy summaries
            for quick insights, detailed links for deeper dives. Stay ahead
            effortlessly! 🚀{" "}
          </h5>
        </div>
        <img src={image} alt="" className="position-absolute z-n1 heroImage" />
      </div>
      <SearchBox category={category} />
    </>
  );
};

export default Hero;
