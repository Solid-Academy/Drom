import scss from "./arrow.module.scss";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <img className={scss.arrowL} src="arrows/arrowRight.png" alt="imgicoins" />
    </div>
  );
}

export default SampleNextArrow;
