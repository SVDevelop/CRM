
import PanelNavigation from './PanelNavigation'

export default function LeftPanel () {

    return (
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
                <PanelNavigation />
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
    )
}