/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M18.6245 8.21918L13.6245 4.21918C13.2595 3.92718 12.7405 3.92718 12.3755 4.21918L7.37551 8.21918C6.94351 8.56418 6.87451 9.19318 7.21951 9.62418C7.56351 10.0552 8.19351 10.1252 8.62451 9.78118L11.9995 7.08018V16.0002C11.9995 16.5512 11.5515 17.0002 10.9995 17.0002H5.99951C5.44751 17.0002 4.99951 17.4482 4.99951 18.0002C4.99951 18.5522 5.44751 19.0002 5.99951 19.0002H10.9995C12.6545 19.0002 13.9995 17.6542 13.9995 16.0002V7.08018L17.3755 9.78118C17.5595 9.92818 17.7805 10.0002 17.9995 10.0002C18.2925 10.0002 18.5835 9.87118 18.7805 9.62418C19.1255 9.19318 19.0565 8.56418 18.6245 8.21918Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M18.6245 8.21918L13.6245 4.21918C13.2595 3.92718 12.7405 3.92718 12.3755 4.21918L7.37551 8.21918C6.94351 8.56418 6.87451 9.19318 7.21951 9.62418C7.56351 10.0552 8.19351 10.1252 8.62451 9.78118L11.9995 7.08018V16.0002C11.9995 16.5512 11.5515 17.0002 10.9995 17.0002H5.99951C5.44751 17.0002 4.99951 17.4482 4.99951 18.0002C4.99951 18.5522 5.44751 19.0002 5.99951 19.0002H10.9995C12.6545 19.0002 13.9995 17.6542 13.9995 16.0002V7.08018L17.3755 9.78118C17.5595 9.92818 17.7805 10.0002 17.9995 10.0002C18.2925 10.0002 18.5835 9.87118 18.7805 9.62418C19.1255 9.19318 19.0565 8.56418 18.6245 8.21918Z"/>,
    })
))