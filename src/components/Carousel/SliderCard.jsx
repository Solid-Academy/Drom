import scss from "./carousel.module.scss";

function SliderCard({ img, id }) {
  return (
    <>
      <div className={scss.wrapper}>
        <img src={img} key={id} alt="" />
      </div>
    </>
  );
}

export default SliderCard;
