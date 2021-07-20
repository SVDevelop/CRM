import React, {useState} from 'react'


export default function Filter ({change, setFilterSelect}) {
    const [value, setValue] = useState('')
    return (
        <form action="">
            <div className="row mb-3 justify-content-start">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="..." id="status">
                        <a href="/" className="btn btn-light" name="Все" onClick={change}>Все</a>
                        <a href="/" className="btn btn-light" name="Новые" onClick={change}>Новые</a>
                        <a href="/" className="btn btn-light" name="В работе" onClick={change}>В работе</a>
                        <a href="/" className="btn btn-light" name="Завершенные" onClick={change}>Завершенные</a>
                        <a href="/" className="btn btn-light" name="Архив" onClick={change}>Архив</a>
                    </div>
                </div>

                <div className="col">
                    <select 
                        className="custom-select" 
                        id="products" 
                        name="product"
                        value={value}
                        onChange={(e)=>{
                            setValue(e.target.value)
                            setFilterSelect(e.target.value)
                        }}
                    >
                        <option value="" selected>Все продукты</option>
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