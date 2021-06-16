/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M11.1114 23.0001C10.9974 23.0001 10.8824 22.9801 10.7694 22.9391C10.3374 22.7821 10.0674 22.3501 10.1174 21.8931L10.8854 14.8001H5.00036C4.63136 14.8001 4.29236 14.5971 4.11836 14.2711C3.94436 13.9451 3.96436 13.5511 4.16936 13.2441L12.0574 1.44409C12.3134 1.06109 12.7974 0.90209 13.2304 1.06109C13.6634 1.21809 13.9324 1.65009 13.8824 2.10709L13.1144 9.20009H19.0004C19.3694 9.20009 19.7084 9.40309 19.8824 9.72909C20.0554 10.0551 20.0364 10.4491 19.8314 10.7561L11.9424 22.5561C11.7534 22.8401 11.4374 23.0001 11.1114 23.0001Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M6.87112 12.7998H12.0001C12.2841 12.7998 12.5551 12.9208 12.7441 13.1318C12.9331 13.3428 13.0241 13.6248 12.9941 13.9068L12.5451 18.0568L17.1291 11.1998H12.0001C11.7161 11.1998 11.4451 11.0788 11.2561 10.8678C11.0661 10.6568 10.9751 10.3748 11.0061 10.0928L11.4551 5.9438L6.87112 12.7998ZM11.1111 22.9998C10.9971 22.9998 10.8821 22.9808 10.7691 22.9398C10.3371 22.7818 10.0671 22.3498 10.1171 21.8928L10.8861 14.7998H5.00012C4.63112 14.7998 4.29212 14.5968 4.11812 14.2718C3.94412 13.9458 3.96412 13.5508 4.16912 13.2438L12.0581 1.4448C12.3131 1.0608 12.7971 0.902798 13.2301 1.0608C13.6631 1.2178 13.9331 1.6508 13.8831 2.1078L13.1141 9.1998H19.0001C19.3691 9.1998 19.7081 9.4038 19.8821 9.7288C20.0561 10.0548 20.0361 10.4488 19.8311 10.7558L11.9421 22.5558C11.7531 22.8398 11.4371 22.9998 11.1111 22.9998Z"/>,
    })
))