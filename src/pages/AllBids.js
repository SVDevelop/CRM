import React, { useState, useCallback } from "react"
import LeftPanel from "../components/LeftPanel"
import MainWrapper from "../components/MainWrapper"
import Modal from "../components/Modal"

export default function AllBids () {
    const [filter, setFilter] = useState('Все')

    const change = useCallback((e) => {
        e?.preventDefault()
        
        setFilter(e.target.name)
    }, [])

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
        <div className="body--dashboard">
            <LeftPanel change={change} filter={filter} />
            <MainWrapper change={change} filter={filter} />
            <Modal {...{
                id: 3,
                date: '01.08.2019',
                product: 'Курс по VUE JS',
                name: 'Юрий',
                email: 'info@rightblog.ru',
                phone: '+7 (909) 77-55-777',
                status: 'В работе'
            }} />
        </div>
    )
}