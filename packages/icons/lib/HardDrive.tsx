/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M5.61824 11L8.34224 5.553C8.51224 5.212 8.85524 5 9.23624 5H14.7642C15.1452 5 15.4882 5.212 15.6582 5.553L18.3822 11H5.61824ZM16.0002 17H12.0002C11.4502 17 11.0002 16.55 11.0002 16C11.0002 15.45 11.4502 15 12.0002 15H16.0002C16.5502 15 17.0002 15.45 17.0002 16C17.0002 16.55 16.5502 17 16.0002 17ZM8.00024 17C7.45024 17 7.00024 16.55 7.00024 16C7.00024 15.45 7.45024 15 8.00024 15C8.55024 15 9.00024 15.45 9.00024 16C9.00024 16.55 8.55024 17 8.00024 17ZM20.7892 11.342L17.4472 4.658C16.9352 3.636 15.9082 3 14.7642 3H9.23624C8.09224 3 7.06424 3.636 6.55324 4.658L3.21124 11.342C3.07324 11.618 3.00024 11.928 3.00024 12.236V18C3.00024 19.654 4.34624 21 6.00024 21H18.0002C19.6542 21 21.0002 19.654 21.0002 18V12.236C21.0002 11.928 20.9272 11.618 20.7892 11.342Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17C7.45 17 7 16.55 7 16ZM12 15H16C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17H12C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15ZM18 19H6C5.449 19 5 18.552 5 18V13H19V18C19 18.552 18.551 19 18 19ZM8.342 5.553C8.512 5.212 8.855 5 9.236 5H14.764C15.145 5 15.488 5.212 15.658 5.553L18.382 11H5.618L8.342 5.553ZM20.789 11.342L17.447 4.658C16.936 3.636 15.908 3 14.764 3H9.236C8.092 3 7.064 3.636 6.553 4.658L3.211 11.342C3.073 11.618 3 11.928 3 12.236V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V12.236C21 11.928 20.927 11.618 20.789 11.342Z"/>,
    })
))