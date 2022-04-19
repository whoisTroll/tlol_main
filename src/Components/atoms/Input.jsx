import React, { memo } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs(props=>({
    type: props.type ? props.type : "text"
}))`
    height: 48px;
    width: 322px;
    left: 34px;
    top: 188px;
    border-radius: 0px;
`

export default Input