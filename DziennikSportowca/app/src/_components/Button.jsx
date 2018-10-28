import React, { PureComponent } from "react";

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
            ariaLabel
        } = this.props;
        
        let buttonClassName = "btn ";
        if (type) buttonClassName += `btn-${type} `;
        if (className) buttonClassName += `${className} `;
        if (customClassName) buttonClassName = customClassName;

        return !modal ? (
            <button type="button" className={buttonClassName} onClick={onClick}>
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

Button.defaultProps = {
    ariaLabel: ""
};

export default Button;
