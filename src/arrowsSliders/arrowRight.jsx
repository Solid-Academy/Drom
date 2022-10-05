import scss from "./arrow.module.scss";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <img className={scss.arrowR} src="arrows/arrowLeft.jpg" alt="imgicoins" />
    </div>
  );
}

export default SamplePrevArrow;
