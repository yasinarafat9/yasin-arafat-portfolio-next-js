import React from 'react';

const Wrapper = ({children}) => {
    return (
        <div className='w-[1280px] m-auto p-2'>
            {children}
        </div>
    );
};

export default Wrapper;