
import PanelNavigation from './PanelNavigation'
import User from './User'
import Logo from './Logo'

export default function LeftPanel ({change}) {
    return (
        <div className="left-panel blue-skin">

                <Logo />

                <User />

                <PanelNavigation change={change} />
                
                <div className="left-panel__navigation">
                    <div className="left-panel__navigation-title">
                        Продукты
                    </div>
                    <ul>
                        <li><a href="/">Активные</a></li>
                        <li><a href="/">Архив</a></li>
                    </ul>
                </div>

                <div className="left-panel__navigation left-panel__navigation--no-line">
                    <ul>
                        <li><a href="/">Выход</a></li>
                    </ul>
                </div>

        </div>
    )
}