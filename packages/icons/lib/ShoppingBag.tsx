/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M6.414 7L8.121 5.293C8.308 5.107 8.565 5 8.828 5H15.172C15.435 5 15.692 5.107 15.879 5.293L17.586 7H6.414ZM12 16C9.794 16 8 14.206 8 12C8 11.448 8.447 11 9 11C9.553 11 10 11.448 10 12C10 13.103 10.897 14 12 14C13.102 14 14 13.103 14 12C14 11.448 14.447 11 15 11C15.553 11 16 11.448 16 12C16 14.206 14.206 16 12 16ZM20.121 6.707L17.293 3.879C16.727 3.312 15.973 3 15.172 3H8.828C8.027 3 7.273 3.312 6.707 3.879L3.879 6.707C3.312 7.273 3 8.027 3 8.829V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V8.829C21 8.027 20.687 7.273 20.121 6.707Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M15 11C14.447 11 14 11.448 14 12C14 13.103 13.103 14 12 14C10.897 14 10 13.103 10 12C10 11.448 9.553 11 9 11C8.447 11 8 11.448 8 12C8 14.206 9.794 16 12 16C14.206 16 16 14.206 16 12C16 11.448 15.553 11 15 11ZM18 19H6C5.448 19 5 18.551 5 18V9H19V18C19 18.551 18.552 19 18 19ZM8.121 5.293C8.308 5.107 8.565 5 8.828 5H15.172C15.435 5 15.692 5.107 15.879 5.293L17.586 7H6.414L8.121 5.293ZM20.121 6.707L17.293 3.879C16.727 3.312 15.973 3 15.172 3H8.828C8.027 3 7.273 3.312 6.707 3.879L3.879 6.707C3.312 7.273 3 8.027 3 8.829V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V8.829C21 8.027 20.688 7.273 20.121 6.707Z"/>,
    })
))