import Bid from './Bid'
import {useFilter} from '../hooks/useFilter'

const Bids = () => {
    const filterBids = useFilter()
    
    return (
        <>
            {filterBids.map((bid, i) => <Bid key={i} {...bid} />)}
        </>    
    )
};

export default Bids;