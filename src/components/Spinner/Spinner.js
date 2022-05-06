import React from 'react';
import './Spinner.css'
const Spinner = () => {
    return (
        <div>
             <div className=" d-flex justify-content-center align-items-center spinner">
                <div class="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        </div>
    );
};

export default Spinner;