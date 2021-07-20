import React, { useState } from 'react';
import {useDispatch} from 'react-redux'

export default function Bid ({
    id, 
    date, 
    product, 
    name, 
    email, 
    phone, 
    status
}) {

    return (
        <tr>
            <th scope="row">{id}</th>
            <td>{date}</td>
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