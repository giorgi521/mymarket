'use client';
import Image from 'next/image';
import backgroundImage from '../favicon.ico';

import React from 'react';
const Page = () => {
    return (
        <div>
            <Image 
                src={backgroundImage}
                width={200}
                height={200}
                alt='nextjs'
            />
            <div>
                <a href='/dashboard'>Home</a>
            </div>
        </div>
    );
};

export default Page;