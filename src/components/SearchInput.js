import React from 'react';

export const SearchInput = () => {
    return (
        <div className="relative flex items-center justify-between">
            <i class="absolute left-4 fa-solid fa-magnifying-glass cursor-pointer"></i>
            <input
                type="text"
                placeholder="무더위 쉼터 검색"
                className="input input-bordered w-[50rem] max-w-sm bg-white pl-10"
            />
        </div>
    );
};
