import React from 'react';

const Banner = (params) => {
    let { bannerText, changeText } = params;
    return (
        <div>
            <span>{ bannerText }</span><br/>
            <button type="button" onClick = { () => changeText(bannerText + 1) }>click add</button>
        </div>
    );
};

export default Banner;