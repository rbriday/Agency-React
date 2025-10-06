import React from 'react';

const Container = ({children, className}) => {
    return (
        <div className={`w-[1320px] px-5 md:px-0 mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default Container;