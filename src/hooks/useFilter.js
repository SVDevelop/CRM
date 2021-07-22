// import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { setFilter } from '../store/action'


export function useFilter () {
    const filter = useSelector(state => state.filter.flagFilter)
    // const dispacth = useDispatch()
    const binds = useSelector(state => state.binds.bindsList)
    
    const filterBinds = (product='') => {
        if (filter === "Все") {
            return binds
        }
        if (!product) {
            return binds.filter(bind => bind.status === filter )
        }
        return binds.filter(bind => bind.status === filter )
                    .filter(bind => bind.product === product)
    }

    // const change = useCallback((e) => {
    //     e?.preventDefault()
        
    //     dispacth(setFilter(e.target.name))
    // }, [])

    return  {filterBinds}
}
