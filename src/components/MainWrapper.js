import { useState } from 'react'
import {useSelector} from 'react-redux'
import Bid from "../components/Bid"
import Filter from "../components/Fiter"


export default function MainWrapper ({change, filter}) {
    
    const binds = useSelector(state => state.binds.bindsList)
    const [filterSelect, setFilterSelect] = useState('')
    const filterBinds = (binds, product='') => {
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

    return (
        <div className="main-wrapper">
                <div className="container-fluid">

                    <div className="admin-heading-1">Все заявки</div>

                    <Filter 
                        change={change} setFilterSelect={setFilterSelect} 
                    />

                    <table className="table fs-14">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>дата</th>
                                <th>продукт</th>
                                <th>имя</th>
                                <th>email</th>
                                <th>телефон</th>
                                <th>статус</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="ordersTabel">
                            {
                                filterBinds(binds, filterSelect).map((bid, i) => (<Bid key={i} {...bid} />))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
    )
}