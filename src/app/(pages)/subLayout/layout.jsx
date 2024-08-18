import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import SideNav from '@/app/components/SideNav';
import Wrapper from '@/app/components/Wrapper';
import React, { Children } from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Wrapper>
                <div className="flex ">
                    <SideNav />
                    <div>
                        <Navbar />
                        <div className="container m-auto">
                            {children}
                        </div>
                    </div>
                </div>
                <Footer />
            </Wrapper>
        </div>
    );
};

export default layout;