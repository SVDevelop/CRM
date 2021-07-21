import LeftPanel from "../components/LeftPanel"
import MainWrapper from "../components/MainWrapper"
import Modal from "../components/Modal"
import {useFilter} from '../hooks/useFilter'

export default function AllBids () {
    // const [filter, setFilter] = useState('Все')

    // const change = useCallback((e) => {
    //     e?.preventDefault()
        
    //     setFilter(e.target.name)
    // }, [])
        const {filterBinds, change} = useFilter()

    return (
        <div className="body--dashboard">
            <LeftPanel  change={change} />
            <MainWrapper 
                filterBinds={filterBinds}
                change={change} />
        </div>
    )
}