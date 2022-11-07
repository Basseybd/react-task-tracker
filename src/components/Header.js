import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ name }) => {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header className="header">
      <h1>{name}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  name: "Bassey's Task Tracker",
};

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

// CSS IN JS
// const headerStyle = { color: "Blue", backgroundColor: "black" };

export default Header;
