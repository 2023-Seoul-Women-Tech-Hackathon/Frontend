import React from 'react';

export const MobilePreview = ({ children }) => {
    return (
        <div className="mockup-phone h-screen w-[512px]">
            <div className="camera"></div>
            <div className="display">{children}</div>
        </div>
    );
};
