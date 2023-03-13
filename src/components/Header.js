import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ name, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{name}</h1>
      {location.pathname === '/' && <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />}
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
