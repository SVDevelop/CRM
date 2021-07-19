import React, {useEffect} from "react"
import { useCallback } from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import Bid from "../components/Bid"
import Filter from "../components/Fiter"

export default function AllBids () {
    const [filter, setFilter] = useState('Все')
    const binds = useSelector(state => state.binds.bindsList)
    const filterBinds = () => {
        if (filter === "Все") {
            return binds
        }
        return binds.filter(bind => bind.status === filter )
    }
    const change = (e) => {
        e.preventDefault()
        // if (e.target.name === "Все") {
        //     return
        // }
        console.log(e.target.name)
        setFilter(e.target.name)
    }
    console.log(binds)
    // useEffect(() => console.log(filter), [])
    return useCallback(
        <div className="body--dashboard">

            {/* <!-- left-panel --> */}
            <div className="left-panel blue-skin">
                {/* <!-- Logo --> */}
                <div className="left-panel__logo">
                    <div className="left-panel__logo-title">CRM заявки</div>
                    <div className="left-panel__logo-subtitle">учебный проект webcademy</div>
                </div>
                {/* <!-- // Logo -->
                <!-- User --> */}
                <div className="left-panel__user clearfix">
                    <div className="left-panel__user-photo">
                        <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
                    </div>
                    <div className="left-panel__user-name">
                        Юрий <br />Ключевский
                    </div>
                </div>
                {/* <!-- // User -->
                <!-- Navigation 1 --> */}
                <div className="left-panel__navigation">
                    <div className="left-panel__navigation-title">
                        Заявки
                    </div>
                    <ul id="statusApplication">
                        <li><a href="/" className="active">Все вместе</a></li>
                        <li><a href="/">Новые <div className="badge">12</div></a></li>
                        <li><a href="/">В работе</a></li>
                        <li><a href="/">Завершенные</a></li>
                        <li><a href="/">Архив</a></li>
                    </ul>
                </div>
                {/* <!-- // Navigation 1 -->
                <!-- Navigation 2 --> */}
                <div className="left-panel__navigation">
                    <div className="left-panel__navigation-title">
                        Продукты
                    </div>
                    <ul>
                        <li><a href="/">Активные</a></li>
                        <li><a href="/">Архив</a></li>
                    </ul>
                </div>
                {/* <!-- // Navigation 2 -->
                <!-- Navigation 3 --> */}
                <div className="left-panel__navigation left-panel__navigation--no-line">
                    <ul>
                        <li><a href="/">Выход</a></li>
                    </ul>
                </div>
                {/* <!-- // Navigation 3 --> */}
            </div>
            {/* <!-- // left-panel -->

            <!-- main-wrapper --> */}
            <div className="main-wrapper">
                <div className="container-fluid">

                    <div className="admin-heading-1">Все заявки</div>

                    <Filter change={change}/>

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
                                filterBinds().map((bid, i) => (<Bid key={i} {...bid} />))
                            }
                        </tbody>
                    </table>

                </div>
            </div>
            {/* <!-- // main-wrapper --> */}

            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="js/database.js"></script>
            <script src="js/main.js"></script> */}
        </div>
    )
}