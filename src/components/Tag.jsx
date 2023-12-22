import React from "react";
import PropTypes from "prop-types";

import "./Tag.scss";
const Tag = ({ tagName }) => {
  return <button className="tag">{tagName}</button>;
};

Tag.propTypes = {
  tagName: PropTypes.string,
};
export default Tag;
