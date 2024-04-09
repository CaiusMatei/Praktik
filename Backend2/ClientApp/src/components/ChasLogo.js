import React, { Component } from 'react';

export default class ChasLogo extends Component {
    render() {
        return (
            <div className="flex w-48 sm:w-64 h-full mx-auto">
                <img
                    className="bg-white prevent-switch rounded-xl text-center"
                    src="../loginpagepicture.jpg"
                    alt="Chas Academy Logo"
                />
            </div>
        );
    }
}