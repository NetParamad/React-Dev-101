import PropTypes from "prop-types";

export default function Image({ imageUrl }) {
  return (
    <>
      <img src={imageUrl} alt="" width="100px" />
    </>
  );
}

Image.propTypes = {
  imageUrl: PropTypes.string,
};
