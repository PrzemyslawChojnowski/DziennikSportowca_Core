import React, { Component } from "react";

class Navbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                        <h4 className="text-white">Collapsed content</h4>
                        <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <span className="form-inline ">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
                        </button>
                    </span>
                </nav>
            </div>
        );
    }
}

export default Navbar;
