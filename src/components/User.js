import {memo} from 'react'

const User = memo(() => {

    return (
        <div className="left-panel__user clearfix">
            <div className="left-panel__user-photo">
                <img src="img/avatars/avatar-128.jpg" alt="Avatar" />
            </div>
            <div className="left-panel__user-name">
                Юрий <br />Ключевский
            </div>
        </div>
    )
})

export default User