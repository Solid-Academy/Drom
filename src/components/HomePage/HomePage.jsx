import Slider from "react-slick";
import ArrayCars from "../../arrowsSliders/ArrayCarsSlider";
import SliderCard from "../Carousel/SliderCard";
import SampleNextArrow from "../../arrowsSliders/arrowsLeft";
import SamplePrevArrow from "../../arrowsSliders/arrowRight";
import scss from "./HomePage.module.scss";

function HomePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <h1>Hello Carousel</h1>
      <div className={scss.container}>
        <Slider {...settings}>
          {ArrayCars.map((item) => (
            <SliderCard img={item.img} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomePage;
