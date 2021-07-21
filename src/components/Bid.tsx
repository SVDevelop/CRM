
export interface IBid {
    id: string | number
    date: Date
    product: string
    name: string
    email: string
    phone: string | number
    status: string
}
export default function Bid ({
    id, 
    date, 
    product, 
    name, 
    email, 
    phone, 
    status
}:IBid | any) {

    return (
        <tr>
            {/* <th scope="row">{id}</th> */}
            <td>{formatDate(date)}</td>
            <td>{product}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone} </td>
            <td>
                <div className="badge badge-pill badge-warning">
                    {status}
                </div>
            </td>
            <td>
                <a 
                href="03-crm-edit-bid.html"
                onClick={(e)=> {
                    e.preventDefault()

                    // useDispatch()
                }}
                >Редактировать</a></td>
        </tr>
    )
}

function formatDate(date:Date) {
    // if (!date) {
    //     console.log(date);
        
    //     return ''
    // }

    let dd:number | string = date.getDate();
    if (dd < 10) {
        dd = '0' + dd
    }

    let mm:number | string = date.getMonth() + 1;
    if (mm < 10) {
        mm = '0' + mm
    }

    let yy:number | string = date.getFullYear() % 100;
    if (yy < 10) {
        yy = '0' + yy
    }

    return dd + '.' + mm + '.' + yy;
}