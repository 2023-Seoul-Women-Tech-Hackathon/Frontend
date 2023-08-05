import React from 'react';
import { Header } from '../components/Header';
import { Map } from '../components/Map';
import { SearchInput } from '../components/SearchInput';

export const SearchShelter = () => {
    return (
        <div className="relative">
            <Header />
            <div className="absolute z-10 w-full h-screen flex flex-col items-center top-20">
                <SearchInput />
            </div>
            <div className="w-full h-screen">
                <Map />
            </div>
        </div>
    );
};
