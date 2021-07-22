import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setFilter, setFilterProduct} from '../store/action'

const Filter = () => {
    
    const productFilter = useSelector(state => state.filter.product)
    const [product, setProduct] = useState(productFilter)

    const dispacth = useDispatch()
    const handlerClick = (e) => {
        e?.preventDefault()
        dispacth(setFilter(e.target.name))
    }

    return (
        <form action="">
            <div className="row mb-3 justify-content-start">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="..." id="status">
                        <a href="/" className="btn btn-light" name="Все" onClick={handlerClick}>Все</a>
                        <a href="/" className="btn btn-light" name="Новые" onClick={handlerClick}>Новые</a>
                        <a href="/" className="btn btn-light" name="В работе" onClick={handlerClick}>В работе</a>
                        <a href="/" className="btn btn-light" name="Завершенные" onClick={handlerClick}>Завершенные</a>
                        <a href="/" className="btn btn-light" name="Архив" onClick={handlerClick}>Архив</a>
                    </div>
                </div>

                <div className="col">
                    <select 
                        className="custom-select" 
                        id="products" 
                        name="product"
                        value={product}
                        onChange={(e)=>{
                            dispacth(setFilterProduct(e.target.value))
                            setProduct(e.target.value)
                        }}
                    >
                        <option defaultValue="Все продукты">Все продукты</option>
                        <option value="Курс по верстке">Курс по верстке</option>
                        <option value="Курс по JavaScript">Курс по JavaScript</option>
                        <option value="Курс по VUE JS">Курс по VUE JS</option>
                        <option value="Курс по PHP">Курс по PHP</option>
                        <option value="Курс по WordPress">Курс по WordPress</option>
                    </select>
                </div>
            </div>
        </form>
    )
}

export default Filter