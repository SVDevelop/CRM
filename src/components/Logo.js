import { memo } from 'react';

const Logo = memo(() => {
    return (
        <div>
            <div className="left-panel__logo">
                    <div className="left-panel__logo-title">CRM заявки</div>
                    <div className="left-panel__logo-subtitle">учебный проект webcademy</div>
                </div>
        </div>
    );
})

export default Logo;