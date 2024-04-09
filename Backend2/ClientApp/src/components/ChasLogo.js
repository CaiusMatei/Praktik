import React, { Component } from 'react';

export default class ChasLogo extends Component {
    render() {
        return (
            <div className="flex flex-1 w-48 sm:w-64">
                <img
                    className="bg-white prevent-switch rounded-xl"
                    src="../loginpagepicture.jpg"
                    alt="Chas Academy Logo"
                />
            </div>
        );
    }
}