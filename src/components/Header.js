import React from 'react';
import icon from '../icon.svg';

export function Header() {
    return (
        <header>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                    {/* <img id="icon" src="/images/icon.svg" className="" alt="logo" /> */}
                    <img id="icon" src={icon} alt="logo" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-center">
                    <div className="title">QUEJAPP</div>
                    <div>Alza la voz.</div>
                </div>
            </div>
        </header>
    );
}