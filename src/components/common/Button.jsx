import PropTypes from "prop-types";

export default function Button({ children, handleClick, customClass }) {
  return (
    <button className={`app-btn ${customClass}`} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  handleClick: PropTypes.func,
  customClass: PropTypes.string,
};
