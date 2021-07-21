import { useState, useCallback } from 'react';
import {useSelector} from 'react-redux'


export function useFilter () {
    const [filter, setFilter] = useState('Все')
    const binds = useSelector(state => state.binds.bindsList)
    
    const filterBinds = (product='') => {
        if (filter === "Все") {
            return binds
        }
        if (!product) {
            console.log('no select');
            return binds.filter(bind => bind.status === filter )
        }
        console.log(`select: ${product}`)
        return binds.filter(bind => bind.status === filter )
                    .filter(bind => bind.product === product)
    }

    const change = useCallback((e) => {
        e?.preventDefault()
        
        setFilter(e.target.name)
    }, [])

    return  {filterBinds, change}
}
