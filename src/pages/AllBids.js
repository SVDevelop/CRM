import LeftPanel from "../components/LeftPanel"
import MainWrapper from "../components/MainWrapper"
import Modal from "../components/Modal"
import {useFilter} from '../hooks/useFilter'

export default function AllBids () {

        const {filterBinds} = useFilter()

    return (
        <div className="body--dashboard">
            <LeftPanel />
            <MainWrapper 
                filterBinds={filterBinds}
            />
        </div>
    )
}