import React, { Component } from "react";

const Col = props => {
    let className = "col";
    if (props.size) className += `-${props.size}`;
    if (props.width) className += `-${props.width}`;

    return <div className={className}>{props.children}</div>;
};

export default Col;
