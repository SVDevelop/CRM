
import PanelNavigation from './PanelNavigation'
import User from './User'
import Logo from './Logo'
import { memo } from 'react'

const LeftPanel = memo(() => {
    return (
        <div className="left-panel blue-skin">

                <Logo />

                <User />

                <PanelNavigation />
                
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
})

export default LeftPanel