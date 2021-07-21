
import {useDispatch} from 'react-redux'
import {addBid} from '../store/action'
import useInput from './../hooks/useInput'

export default function AppForm () {
	const dispacth = useDispatch()
	const submit = () => {
		// sdf
		dispacth(addBid(value));
	}
	const {value, onChange} = useInput({
		name: '',
		phone: '',
		email: '',
		product: ''
	})
    return (
        <div className="radial-bg flex-center">
        <div className="white-plate white-plate--payment">
		<div className="container-fluid">

			{/* <!-- header --> */}
			<div className="white-plate__header text-center">
				<p className="white-plate__logo">
					<span>Форма</span> заявок
				</p>
			</div>
			{/* <!-- // header --> */}

			<div className="white-plate__line-between white-plate__line-between--main"></div>

			<div>
				<label>Ваши данные:</label>
				<div className="form-group">
					<input type="text" name="name" autoComplete="on" className="form-control" placeholder="Имя и Фамилия"
						required id="nameFamily" 
						value={value.name}
						onChange={onChange}	
					/>
					<input type="text" name="phone" autoComplete="on" className="form-control" placeholder="Телефон"
					id="phoneNumber" 
					value={value.phone}
					onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<input type="email" name="email" autoComplete="on" className="form-control" placeholder="Email" required
					id="email" 
					value={value.email}
					onChange={onChange}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="productTitle">Продукт:</label>
					<select name="product" className="form-control" id="productTitle"
					value={value.product}
					onChange={onChange}
					>
						<option value=""></option>
						<option value="Курс по верстке">Курс по верстке</option>
						<option value="Курс по JavaScript">Курс по JavaScript</option>
						<option value="Курс по VUE JS">Курс по VUE JS</option>
						<option value="Курс по PHP">Курс по PHP</option>
						<option value="Курс по WordPress">Курс по WordPress</option>
					</select>
				</div>

				<div className="form-group">
					<button type="submit" className="btn btn-lg btn-primary btn-block" id="submitButton"
					onClick={submit}
					>Оформить
						заявку</button>
				</div>
			</div>

		</div>
	</div>
        </div>
    )
}