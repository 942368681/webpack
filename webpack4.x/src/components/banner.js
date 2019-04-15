import React from 'react';

const Banner = (params) => {
    let { bannerText, changeText, getdatas } = params;
    return (
        <div>
            <span>{ bannerText }</span><br/>
            <button type="button" onClick = { () => changeText(bannerText + 1) }>click add</button>
            <button type="button" onClick = { () => {getdatas()}}>getData</button>
        </div>
    );
};

export default Banner;