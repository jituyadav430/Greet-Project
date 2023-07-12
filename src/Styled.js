import React from 'react'
import Styl from 'styled-components'


export default function Styled() {
    const Stylebtn=Styl.button`
    display:block;
    background-color:${props=>props.flag? "red" : "yellow"};
    padding:5px 10px;
    border:none;
    color:white;
    width:100%;
    border-radius:19px;
    &:hover{
      box-shadow:0px 0px 10px green;
    }
    @media (min-width:0px) and (max-width:700px){
      width:350px
    }
    `
  return (
    <div>
      <Stylebtn flag={1}>click me!</Stylebtn><br/>
      <Stylebtn flag={0}>login with google</Stylebtn>
    </div>
  )
}
