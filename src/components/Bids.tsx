import React from 'react';
import Bid from './Bid'

const Bids = ({filterBinds}:[] | any) => {

    return (
        <>
            {filterBinds.map((bid:Object, i:number) => <Bid key={i} {...bid} />)}
        </>    
    )
};

export default Bids;