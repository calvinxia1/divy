import React, { ReactNode, useState } from 'react'
interface Props{
    children: string;
    color?: 'primary'|'secondary';
    onClick:() => void; 
}
const Button = ({children,color = "primary", onClick}: Props) => {


    return (
        <button type="button" className= {"btn btn-" + color} onClick={onClick}>{children}</button>
    )
}

export default Button