import React from 'react';

const AnchorLink = ({ desktopId, mobileId, children }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const id = window.innerWidth < 768 ? mobileId : desktopId;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a href={`#${desktopId}`} onClick={handleClick} style={{marginRight: '20px', backgroundColor: '#b99226', color:"white", padding:"10px 15px", borderRadius:"5px"}}>
            {children}
        </a>
    );
};

export default AnchorLink;
