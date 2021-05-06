/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="LogInIcon/Fill/log-in"><path id="LogInMask" fill-rule="evenodd" clip-rule="evenodd" d="M17 4H19C19.55 4 20 4.45 20 5V19C20 19.55 19.55 20 19 20H17C16.45 20 16 19.55 16 19C16 18.45 16.45 18 17 18H18V6H17C16.45 6 16 5.55 16 5C16 4.45 16.45 4 17 4ZM10.3998 7.2004C10.8438 6.8694 11.4688 6.9594 11.7998 7.4004L14.7998 11.4004C15.0598 11.7464 15.0678 12.2204 14.8178 12.5754L12.0038 16.5754C11.8088 16.8524 11.4998 17.0004 11.1848 17.0004C10.9868 17.0004 10.7858 16.9414 10.6108 16.8184C10.1588 16.5004 10.0498 15.8764 10.3678 15.4244L12.0858 12.9824C12.0723 12.9837 12.0596 12.9875 12.047 12.9913C12.0316 12.9958 12.0163 13.0004 11.9998 13.0004H3.99976C3.44776 13.0004 2.99976 12.5524 2.99976 12.0004C2.99976 11.4474 3.44776 11.0004 3.99976 11.0004H11.9998H12.0008L10.1998 8.5994C9.86876 8.1584 9.95776 7.5314 10.3998 7.2004Z"/><mask id="LogInmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="18" height="16"><path id="LogInMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M17 4H19C19.55 4 20 4.45 20 5V19C20 19.55 19.55 20 19 20H17C16.45 20 16 19.55 16 19C16 18.45 16.45 18 17 18H18V6H17C16.45 6 16 5.55 16 5C16 4.45 16.45 4 17 4ZM10.3998 7.2004C10.8438 6.8694 11.4688 6.9594 11.7998 7.4004L14.7998 11.4004C15.0598 11.7464 15.0678 12.2204 14.8178 12.5754L12.0038 16.5754C11.8088 16.8524 11.4998 17.0004 11.1848 17.0004C10.9868 17.0004 10.7858 16.9414 10.6108 16.8184C10.1588 16.5004 10.0498 15.8764 10.3678 15.4244L12.0858 12.9824C12.0723 12.9837 12.0596 12.9875 12.047 12.9913C12.0316 12.9958 12.0163 13.0004 11.9998 13.0004H3.99976C3.44776 13.0004 2.99976 12.5524 2.99976 12.0004C2.99976 11.4474 3.44776 11.0004 3.99976 11.0004H11.9998H12.0008L10.1998 8.5994C9.86876 8.1584 9.95776 7.5314 10.3998 7.2004Z"/></mask><g mask="url(#LogInmask0)"><g id="LogIn&#LogIn240;&#LogIn159;&#LogIn142;&#LogIn168; Color"><rect id="LogInBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="LogIn-oIcon/Outline/log-in"><path id="LogIn-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M17 4H19C19.55 4 20 4.45 20 5V19C20 19.55 19.55 20 19 20H17C16.45 20 16 19.55 16 19C16 18.45 16.45 18 17 18H18V6H17C16.45 6 16 5.55 16 5C16 4.45 16.45 4 17 4ZM10.3998 7.2004C10.8438 6.8694 11.4688 6.9594 11.7998 7.4004L14.7998 11.4004C15.0598 11.7464 15.0678 12.2204 14.8178 12.5754L12.0038 16.5754C11.8088 16.8524 11.4998 17.0004 11.1848 17.0004C10.9868 17.0004 10.7858 16.9414 10.6108 16.8184C10.1588 16.5004 10.0498 15.8764 10.3678 15.4244L12.0858 12.9824C12.0723 12.9837 12.0597 12.9875 12.0471 12.9913C12.0317 12.9958 12.0163 13.0004 11.9998 13.0004H3.9998C3.4478 13.0004 2.9998 12.5524 2.9998 12.0004C2.9998 11.4474 3.4478 11.0004 3.9998 11.0004H11.9998H12.0008L10.1998 8.5994C9.8688 8.1584 9.9578 7.5314 10.3998 7.2004Z"/><mask id="LogIn-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="18" height="16"><path id="LogIn-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M17 4H19C19.55 4 20 4.45 20 5V19C20 19.55 19.55 20 19 20H17C16.45 20 16 19.55 16 19C16 18.45 16.45 18 17 18H18V6H17C16.45 6 16 5.55 16 5C16 4.45 16.45 4 17 4ZM10.3998 7.2004C10.8438 6.8694 11.4688 6.9594 11.7998 7.4004L14.7998 11.4004C15.0598 11.7464 15.0678 12.2204 14.8178 12.5754L12.0038 16.5754C11.8088 16.8524 11.4998 17.0004 11.1848 17.0004C10.9868 17.0004 10.7858 16.9414 10.6108 16.8184C10.1588 16.5004 10.0498 15.8764 10.3678 15.4244L12.0858 12.9824C12.0723 12.9837 12.0597 12.9875 12.0471 12.9913C12.0317 12.9958 12.0163 13.0004 11.9998 13.0004H3.9998C3.4478 13.0004 2.9998 12.5524 2.9998 12.0004C2.9998 11.4474 3.4478 11.0004 3.9998 11.0004H11.9998H12.0008L10.1998 8.5994C9.8688 8.1584 9.9578 7.5314 10.3998 7.2004Z"/></mask><g mask="url(#LogIn-omask0)"><g id="LogIn-o&#LogIn-o240;&#LogIn-o159;&#LogIn-o142;&#LogIn-o168; Color"><rect id="LogIn-oBase" width="24" height="24"/></g></g></g></g>,
    })
))