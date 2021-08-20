import React, {Component } from "react";

const Locations = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';

    return (
    <div className={showHideClassName}> 
    <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>close</button>
    </section>
    </div>
    );
};
