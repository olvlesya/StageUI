/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="AwardIcon/Fill/award"><path id="AwardMask" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.99991C14.206 3.99991 16 5.79391 16 7.99991C16 10.2059 14.206 11.9999 12 11.9999C9.79402 11.9999 8.00002 10.2059 8.00002 7.99991C8.00002 5.79391 9.79402 3.99991 12 3.99991ZM18.969 20.7509L16.66 11.7719C17.496 10.7399 18 9.42891 18 7.99991C18 4.69091 15.309 1.99991 12 1.99991C8.69102 1.99991 6.00002 4.69091 6.00002 7.99991C6.00002 9.42891 6.50402 10.7399 7.34002 11.7719L5.03102 20.7509C4.93102 21.1429 5.07502 21.5559 5.39802 21.7989C5.72102 22.0419 6.15802 22.0639 6.50602 21.8619L11.836 18.7329L17.516 21.8749C17.667 21.9589 17.834 21.9999 18 21.9999C18.217 21.9999 18.433 21.9299 18.612 21.7909C18.928 21.5469 19.068 21.1379 18.969 20.7509Z"/><mask id="Awardmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="16" height="20"><path id="AwardMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 3.99991C14.206 3.99991 16 5.79391 16 7.99991C16 10.2059 14.206 11.9999 12 11.9999C9.79402 11.9999 8.00002 10.2059 8.00002 7.99991C8.00002 5.79391 9.79402 3.99991 12 3.99991ZM18.969 20.7509L16.66 11.7719C17.496 10.7399 18 9.42891 18 7.99991C18 4.69091 15.309 1.99991 12 1.99991C8.69102 1.99991 6.00002 4.69091 6.00002 7.99991C6.00002 9.42891 6.50402 10.7399 7.34002 11.7719L5.03102 20.7509C4.93102 21.1429 5.07502 21.5559 5.39802 21.7989C5.72102 22.0419 6.15802 22.0639 6.50602 21.8619L11.836 18.7329L17.516 21.8749C17.667 21.9589 17.834 21.9999 18 21.9999C18.217 21.9999 18.433 21.9299 18.612 21.7909C18.928 21.5469 19.068 21.1379 18.969 20.7509Z"/></mask><g mask="url(#Awardmask0)"><g id="Award&#Award240;&#Award159;&#Award142;&#Award168; Color"><rect id="AwardBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Award-oIcon/Outline/award"><path id="Award-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M12.3057 16.707C11.9947 16.536 11.6187 16.539 11.3157 16.72L7.5677 18.92L9.0357 13.21C9.9107 13.71 10.9217 14 11.9997 14C13.0777 14 14.0887 13.71 14.9647 13.21L16.4537 19.002L12.3057 16.707ZM11.9997 4C14.2057 4 15.9997 5.794 15.9997 8C15.9997 10.206 14.2057 12 11.9997 12C9.7937 12 7.9997 10.206 7.9997 8C7.9997 5.794 9.7937 4 11.9997 4ZM18.9687 20.751L16.6597 11.772C17.4957 10.74 17.9997 9.429 17.9997 8C17.9997 4.691 15.3087 2 11.9997 2C8.6917 2 5.9997 4.691 5.9997 8C5.9997 9.429 6.5037 10.74 7.3397 11.772L5.0317 20.751C4.9307 21.143 5.0757 21.556 5.3987 21.799C5.7207 22.042 6.1587 22.064 6.5057 21.862L11.8357 18.733L17.5157 21.875C17.6667 21.959 17.8337 22 17.9997 22C18.2167 22 18.4327 21.93 18.6127 21.791C18.9277 21.547 19.0687 21.138 18.9687 20.751Z"/><mask id="Award-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="5" y="2" width="15" height="20"><path id="Award-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12.3057 16.707C11.9947 16.536 11.6187 16.539 11.3157 16.72L7.5677 18.92L9.0357 13.21C9.9107 13.71 10.9217 14 11.9997 14C13.0777 14 14.0887 13.71 14.9647 13.21L16.4537 19.002L12.3057 16.707ZM11.9997 4C14.2057 4 15.9997 5.794 15.9997 8C15.9997 10.206 14.2057 12 11.9997 12C9.7937 12 7.9997 10.206 7.9997 8C7.9997 5.794 9.7937 4 11.9997 4ZM18.9687 20.751L16.6597 11.772C17.4957 10.74 17.9997 9.429 17.9997 8C17.9997 4.691 15.3087 2 11.9997 2C8.6917 2 5.9997 4.691 5.9997 8C5.9997 9.429 6.5037 10.74 7.3397 11.772L5.0317 20.751C4.9307 21.143 5.0757 21.556 5.3987 21.799C5.7207 22.042 6.1587 22.064 6.5057 21.862L11.8357 18.733L17.5157 21.875C17.6667 21.959 17.8337 22 17.9997 22C18.2167 22 18.4327 21.93 18.6127 21.791C18.9277 21.547 19.0687 21.138 18.9687 20.751Z"/></mask><g mask="url(#Award-omask0)"><g id="Award-o&#Award-o240;&#Award-o159;&#Award-o142;&#Award-o168; Color"><rect id="Award-oBase" width="24" height="24"/></g></g></g></g>,
    })
))