/**
 * A link to a certain page, an anchor tag
 */
import React from 'react';
import './A.style.scss';

/* eslint-disable react/prop-types, no-unused-vars */
const A = (props) => (
  <a {...props}>{props.children}</a>
);

export default A;
