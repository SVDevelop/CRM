import {useCallback} from 'react'
import {setFilter} from '../store/action'
import {useDispatch, useSelector } from 'react-redux'

const PanelNavigation = () => {
    const filter = useSelector(state => state.filter.flagFilter)
    const bindsBadge = useSelector(state => state.binds.bindsList)
    const dispacth = useDispatch()
    const handlerClick = (e) => {
        e?.preventDefault()
        dispacth(setFilter(e.target.name))
    }

    const badges = useCallback(() => {
        const badges = {
            all: bindsBadge.length,
            new: 0,
            worck: 0,
            clossesd: 0,
            archive: 0
        }
        for (let bind of bindsBadge) {
            switch (bind.status) {
                case "Новые": {
                    badges.new++
                    break
                }
                case "В работе": {
                    badges.worck++
                    break
                }
                case "Завершенные": {
                    badges.clossesd++
                    break
                }
                case "Архив": {
                    badges.archive++
                    break
                }
                default: 
                    return

            }
        }
        return badges
    }, [bindsBadge]) 

    return (
        <div className="left-panel__navigation">
            <div className="left-panel__navigation-title">
                Заявки
            </div>
            <ul id="statusApplication">
                <li><a href="/" 
                        className={filter === 'Все' ? 'active': ''}
                        name="Все"
                        onClick={handlerClick}
                    >Все вместе<div className="badge"
                    >{badges().all || ''}</div></a></li>
                <li><a href="/"
                        className={filter === 'Новые' ? 'active': ''}
                        name="Новые"
                        onClick={handlerClick}
                    >Новые <div className="badge"
                >{badges().new || ''}</div></a></li>
                <li><a href="/"
                        className={filter === 'В работе' ? 'active': ''}
                        name="В работе"
                        onClick={handlerClick}
                    >В работе<div className="badge"
                    >{badges().worck || ''}</div></a></li>
                <li><a href="/"
                        className={filter === 'Завершенные' ? 'active': ''}
                        name="Завершенные"
                        onClick={handlerClick}
                    >Завершенные<div className="badge"
                    >{badges().clossesd || ''}</div></a></li>
                <li><a href="/"
                        className={filter === 'Архив' ? 'active': ''}
                        name="Архив"
                        onClick={handlerClick}
                    >Архив<div className="badge"
                    >{badges().archive || ''}</div></a></li>
            </ul>
        </div>
    )
}

export default PanelNavigation