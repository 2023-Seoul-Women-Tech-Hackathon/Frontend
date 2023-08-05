import React, { useEffect } from 'react';

const { kakao } = window;

export const Map = () => {
    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667),
            level: 3,
        };
        new kakao.maps.Map(container, options);
    }, []);

    return <div id="map" className="h-[calc(100vh-2rem)] w-full rounded-[36px]"></div>;
};
