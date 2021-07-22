import { useSelector } from 'react-redux'


export function useFilter () {
    const filter = useSelector(state => state.filter.flagFilter)
    const product = useSelector(state => state.filter.product)
    const binds = useSelector(state => state.binds.bindsList)
        
        const products = [
            'Курс по верстке',        
            'Курс по JavaScript',    
            'Курс по VUE JS',
            'Курс по PHP',
            'Курс по WordPress'
        ]
        

        const filterBinds = () => {
            if (filter === "Все" && (!product.includes(product) || product === 'Все продукты')) {
                return binds
            }
            if (filter === "Все" && products.includes(product)) {
                return binds
                        .filter(bind => bind.status)
                        .filter(bind => bind.product === product)
            } else if (filter !== "Все" && products.includes(product)) {
                return binds
                    .filter(bind => bind.product === product)
                    .filter(bind => bind.status === filter)
            }
            return binds.filter(bind => bind.status === filter)
        }
    return  [...filterBinds()]
}
