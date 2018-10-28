import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Button extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children,
            onClick,
            className,
            type,
            modal,
            customClassName,
            ariaLabel,
            outline,
            size,
            block,
            ...otherProps
        } = this.props;

        let buttonClassName = "btn ";
        if (size) buttonClassName += `btn-${size} `;
        if (block) buttonClassName += "btn-block ";
        if (type) buttonClassName += `btn-${outline && "outline-"}${type} `;
        if (className) buttonClassName += `${className} `;
        if (customClassName) buttonClassName = customClassName;

        return !modal ? (
            <button type="button" className={buttonClassName} onClick={onClick} {...otherProps}> 
                {children}
            </button>
        ) : (
            <button
                type="button"
                className={buttonClassName}
                data-dismiss="modal"
                onClick={onClick}
                aria-label={ariaLabel}
            >
                {children}
            </button>
        );
    }
}

Button.propTypes = {
    children: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
    type: PropTypes.oneOf([
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
        "link"
    ]),
    modal: PropTypes.bool,
    customClassName: PropTypes.string,
    ariaLabel: PropTypes.string,
    outline: PropTypes.bool,
    size: PropTypes.oneOf(["sm", "lg", ""]),
    block: PropTypes.bool
};

Button.defaultProps = {
    ariaLabel: ""
};

export default Button;
