import React from 'react';
import photo from '../../assets/images/404.jpg';

const InvalidPage = () => {
    return (
        <div className='flex justify-center items-center h-screen mx-5'>
            <img className='rounded-2xl ' src={photo} alt="page not found" />
        </div>
    );
};

export default InvalidPage;