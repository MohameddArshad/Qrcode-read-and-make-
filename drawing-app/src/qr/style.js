import style from 'styled-components'

export const Div = style.div`
width:${props => props.w};
justify-center:${props => props.center};
display:${props => props.display};
`
export const Input = style.input`
outline:none;
padding:5px;
display:${props=>props.display}
`

export const Button = style.button`
background-color:${props => props.bg};
border-radius:5px;
color:white;
padding:5px;
`

export const Qr = style.div`
margin:20px auto;
`

export const Img = style.img`
width:40%;
`