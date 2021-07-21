import { useState } from 'react'
import Bids from "./Bids"
import Filter from "./Fiter"

interface Iprops {
    filterBinds:(arg: string)=>[{}]
    change:(e:Event)=>void
}

function MainWrapper ({filterBinds, change}:Iprops) {
    
    const [selectFilter, setSelectFilter] = useState('')
    const bids:[Object] = filterBinds(selectFilter)
    console.log(bids);
    
    return (
        <div className="main-wrapper">
                <div className="container-fluid">

                    <div className="admin-heading-1">Все заявки</div>

                    <Filter 
                        change={change} setFilterSelect={setSelectFilter} 
                    />

                    <table className="table fs-14">
                        <thead>
                            <tr>
                                {/* <th>ID</th> */}
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
                            <Bids filterBinds={bids} />
                        </tbody>
                    </table>

                </div>
            </div>
    )
}

export default MainWrapper