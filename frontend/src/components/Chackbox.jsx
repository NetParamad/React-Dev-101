import PropTypes from "prop-types";
export default function Chackbox({ text, isChecked }) {
//   let ResultChackbok = "";
//   if (isChecked) {
//     ResultChackbok = <div>{text} is done</div>;
//   } else {
//     ResultChackbok = <div>{text} is not done</div>;
//   }
  return (
    <>
      <div>{text} {isChecked ? "is done" : "is not done"}</div>
    </>
  );
}
Chackbox.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
};