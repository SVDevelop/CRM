
import { useDispatch, useSelector} from 'react-redux'

export default function PanelNavigation ({change}) {

    // const 

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
                <li><a href="/">Новые <div className="badge"
                name="Новые"
                onClick={change}
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