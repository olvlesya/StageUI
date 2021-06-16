/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M12.2958 22C12.2638 22 12.2328 22 12.1998 21.999C9.4058 21.975 6.79779 20.854 4.85579 18.846C1.17879 15.041 1.06379 8.74401 4.59879 4.80901C5.69979 3.58201 7.0438 2.65901 8.59179 2.06601C8.95679 1.92401 9.3718 2.01201 9.65079 2.28801C9.9308 2.56301 10.0238 2.97601 9.88879 3.34401C8.77079 6.39901 9.53179 9.85501 11.8298 12.148C14.1268 14.441 17.5928 15.202 20.6578 14.086C21.0258 13.95 21.4388 14.046 21.7128 14.324C21.9878 14.604 22.0738 15.019 21.9338 15.384C21.4098 16.747 20.6238 17.957 19.5978 18.98C17.6448 20.93 15.0538 22 12.2958 22Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M7.44093 4.91804C6.94093 5.27204 6.48193 5.68204 6.06593 6.14604C3.21693 9.31704 3.30993 14.391 6.27293 17.456C7.83893 19.077 9.94293 19.981 12.1969 20C12.2219 20.001 12.2479 20.001 12.2739 20.001C14.4989 20.001 16.5879 19.138 18.1639 17.565C18.4919 17.238 18.7899 16.887 19.0569 16.513C15.9109 16.905 12.6859 15.851 10.3949 13.565C8.10493 11.279 7.04493 8.06104 7.44093 4.91804ZM12.2739 22.001C12.2419 22.001 12.2109 22.001 12.1789 22C9.38493 21.976 6.77593 20.856 4.83493 18.847C1.15793 15.042 1.04293 8.74504 4.57693 4.81004C5.67793 3.58304 7.02193 2.66004 8.57093 2.06704C8.93593 1.92504 9.35093 2.01304 9.62993 2.28904C9.90893 2.56404 10.0019 2.97704 9.86693 3.34504C8.74893 6.40004 9.51093 9.85604 11.8079 12.149C14.1059 14.442 17.5709 15.203 20.6359 14.087C21.0039 13.951 21.4179 14.047 21.6919 14.325C21.9659 14.606 22.0529 15.02 21.9119 15.385C21.3879 16.748 20.6019 17.958 19.5759 18.981C17.6229 20.931 15.0329 22.001 12.2739 22.001Z"/>,
    })
))