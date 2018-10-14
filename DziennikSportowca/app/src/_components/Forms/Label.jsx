import React, { Component } from "react";

const Label = props => {
    return <label htmlFor={props.htmlFor}>{props.children}</label>;
};

export default Label;
