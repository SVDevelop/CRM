import React from "react"
import Bid from "../components/Bid"

export default function AllBids () {
    return (
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

                    <form action="">
                        {/* <!-- <div className="form-row"> --> */}
                        <div className="row mb-3 justify-content-start">
                            {/* <!-- Col --> */}
                            <div className="col">
                                <div className="btn-group" role="group" aria-label="..." id="status">
                                    <a href="/" className="btn btn-light">Все</a>
                                    <a href="/" className="btn btn-light">Новые</a>
                                    <a href="/" className="btn btn-light">В работе</a>
                                    <a href="/" className="btn btn-light">Завершенные</a>
                                    <a href="/" className="btn btn-light">Архив</a>
                                </div>
                            </div>
                            {/* <!-- // Col -->
                            <!-- Col --> */}
                            <div className="col">
                                <select className="custom-select" id="products">
                                    <option value="" selected>Все продукты</option>
                                    <option value="Курс по верстке">Курс по верстке</option>
                                    <option value="Курс по JavaScript">Курс по JavaScript</option>
                                    <option value="Курс по VUE JS">Курс по VUE JS</option>
                                    <option value="Курс по PHP">Курс по PHP</option>
                                    <option value="Курс по WordPress">Курс по WordPress</option>
                                </select>
                            </div>
                            {/* <!-- // Col --> */}
                        </div>
                    </form>

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
                                createBid().map(bid => (<Bid {...bid} />))
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

function createBid () {
    return [
        {
            id: 1,
            date: '01.08.2019',
            product: 'Курс по верстке',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'Новый'
        },
        {
            id: 2,
            date: '01.08.2019',
            product: 'Курс по верстке',
            name: 'Юрий',
            email: 'info@rightblog.ru',
            phone: '+7 (909) 77-55-777',
            status: 'В работе'
        },
    ]
}