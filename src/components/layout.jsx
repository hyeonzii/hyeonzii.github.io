import React from 'react';
import Nav from './Nav';

function Layout({ children, category }) {
    return (
        <div className="w-full h-full flex flex-col">
            <Nav category={category} />
            <div className=" overflow-y-auto flex flex-col justify-center items-center mt-24">{children}</div>
        </div>
    );
}

export default Layout;
