

export default function PanelNavigation ({change}) {


    return (
        <div className="left-panel__navigation">
            <div className="left-panel__navigation-title">
                Заявки
            </div>
            <ul id="statusApplication">
                <li><a href="/" className="active"
                name="Все"
                onClick={change}
                >Все вместе</a></li>
                <li><a href="/"
                    name="Новые"
                    onClick={change}
                >Новые <div className="badge"
                >12</div></a></li>
                <li><a href="/"
                name="В работе"
                onClick={change}
                >В работе</a></li>
                <li><a href="/"
                name="Завершенные"
                onClick={change}
                >Завершенные</a></li>
                <li><a href="/"
                name="Архив"
                onClick={change}
                >Архив</a></li>
            </ul>
        </div>
    )
}