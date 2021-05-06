/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="ShoppingBagIcon/Fill/shopping-bag"><path id="ShoppingBagMask" fill-rule="evenodd" clip-rule="evenodd" d="M6.41412 7L8.12112 5.293C8.30812 5.107 8.56512 5 8.82812 5H15.1721C15.4351 5 15.6921 5.107 15.8791 5.293L17.5861 7H6.41412ZM12.0001 16C9.79412 16 8.00012 14.206 8.00012 12C8.00012 11.448 8.44712 11 9.00012 11C9.55312 11 10.0001 11.448 10.0001 12C10.0001 13.103 10.8971 14 12.0001 14C13.1021 14 14.0001 13.103 14.0001 12C14.0001 11.448 14.4471 11 15.0001 11C15.5531 11 16.0001 11.448 16.0001 12C16.0001 14.206 14.2061 16 12.0001 16ZM20.1211 6.707L17.2931 3.879C16.7271 3.312 15.9731 3 15.1721 3H8.82812C8.02712 3 7.27312 3.312 6.70712 3.879L3.87912 6.707C3.31212 7.273 3.00012 8.027 3.00012 8.829V18C3.00012 19.654 4.34612 21 6.00012 21H18.0001C19.6541 21 21.0001 19.654 21.0001 18V8.829C21.0001 8.027 20.6871 7.273 20.1211 6.707Z"/><mask id="ShoppingBagmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18"><path id="ShoppingBagMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M6.41412 7L8.12112 5.293C8.30812 5.107 8.56512 5 8.82812 5H15.1721C15.4351 5 15.6921 5.107 15.8791 5.293L17.5861 7H6.41412ZM12.0001 16C9.79412 16 8.00012 14.206 8.00012 12C8.00012 11.448 8.44712 11 9.00012 11C9.55312 11 10.0001 11.448 10.0001 12C10.0001 13.103 10.8971 14 12.0001 14C13.1021 14 14.0001 13.103 14.0001 12C14.0001 11.448 14.4471 11 15.0001 11C15.5531 11 16.0001 11.448 16.0001 12C16.0001 14.206 14.2061 16 12.0001 16ZM20.1211 6.707L17.2931 3.879C16.7271 3.312 15.9731 3 15.1721 3H8.82812C8.02712 3 7.27312 3.312 6.70712 3.879L3.87912 6.707C3.31212 7.273 3.00012 8.027 3.00012 8.829V18C3.00012 19.654 4.34612 21 6.00012 21H18.0001C19.6541 21 21.0001 19.654 21.0001 18V8.829C21.0001 8.027 20.6871 7.273 20.1211 6.707Z"/></mask><g mask="url(#ShoppingBagmask0)"><g id="ShoppingBag&#ShoppingBag240;&#ShoppingBag159;&#ShoppingBag142;&#ShoppingBag168; Color"><rect id="ShoppingBagBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="ShoppingBag-oIcon/Outline/shopping-bag"><path id="ShoppingBag-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M15 11C14.447 11 14 11.448 14 12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12C10 11.448 9.553 11 9 11C8.447 11 8 11.448 8 12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12C16 11.448 15.553 11 15 11ZM18 19H6C5.448 19 5 18.551 5 18V9H19V18C19 18.551 18.552 19 18 19ZM8.121 5.293C8.308 5.107 8.565 5 8.828 5H15.172C15.435 5 15.692 5.107 15.879 5.293L17.586 7H6.414L8.121 5.293ZM20.121 6.707L17.293 3.879C16.727 3.312 15.973 3 15.172 3H8.828C8.027 3 7.273 3.312 6.707 3.879L3.879 6.707C3.312 7.273 3 8.027 3 8.829V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V8.829C21 8.027 20.688 7.273 20.121 6.707Z"/><mask id="ShoppingBag-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="ShoppingBag-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M15 11C14.447 11 14 11.448 14 12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12C10 11.448 9.553 11 9 11C8.447 11 8 11.448 8 12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12C16 11.448 15.553 11 15 11ZM18 19H6C5.448 19 5 18.551 5 18V9H19V18C19 18.551 18.552 19 18 19ZM8.121 5.293C8.308 5.107 8.565 5 8.828 5H15.172C15.435 5 15.692 5.107 15.879 5.293L17.586 7H6.414L8.121 5.293ZM20.121 6.707L17.293 3.879C16.727 3.312 15.973 3 15.172 3H8.828C8.027 3 7.273 3.312 6.707 3.879L3.879 6.707C3.312 7.273 3 8.027 3 8.829V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V8.829C21 8.027 20.688 7.273 20.121 6.707Z"/></mask><g mask="url(#ShoppingBag-omask0)"><g id="ShoppingBag-o&#ShoppingBag-o240;&#ShoppingBag-o159;&#ShoppingBag-o142;&#ShoppingBag-o168; Color"><rect id="ShoppingBag-oBase" width="24" height="24"/></g></g></g></g>,
    })
))