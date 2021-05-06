/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="ShareIcon/Fill/share"><path id="ShareMask" fill-rule="evenodd" clip-rule="evenodd" d="M18 15.0005C17.183 15.0005 16.443 15.3305 15.901 15.8615L7.966 12.3355C7.979 12.2245 8 12.1145 8 12.0005C8 11.8865 7.979 11.7765 7.966 11.6655L15.901 8.13949C16.443 8.67049 17.183 9.00049 18 9.00049C19.654 9.00049 21 7.65449 21 6.00049C21 4.34649 19.654 3.00049 18 3.00049C16.346 3.00049 15 4.34649 15 6.00049C15 6.11449 15.021 6.22449 15.034 6.33549L7.099 9.86149C6.557 9.33049 5.817 9.00049 5 9.00049C3.346 9.00049 2 10.3465 2 12.0005C2 13.6545 3.346 15.0005 5 15.0005C5.817 15.0005 6.557 14.6705 7.099 14.1395L15.034 17.6655C15.021 17.7765 15 17.8865 15 18.0005C15 19.6545 16.346 21.0005 18 21.0005C19.654 21.0005 21 19.6545 21 18.0005C21 16.3465 19.654 15.0005 18 15.0005Z"/><mask id="Sharemask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="19" height="19"><path id="ShareMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M18 15.0005C17.183 15.0005 16.443 15.3305 15.901 15.8615L7.966 12.3355C7.979 12.2245 8 12.1145 8 12.0005C8 11.8865 7.979 11.7765 7.966 11.6655L15.901 8.13949C16.443 8.67049 17.183 9.00049 18 9.00049C19.654 9.00049 21 7.65449 21 6.00049C21 4.34649 19.654 3.00049 18 3.00049C16.346 3.00049 15 4.34649 15 6.00049C15 6.11449 15.021 6.22449 15.034 6.33549L7.099 9.86149C6.557 9.33049 5.817 9.00049 5 9.00049C3.346 9.00049 2 10.3465 2 12.0005C2 13.6545 3.346 15.0005 5 15.0005C5.817 15.0005 6.557 14.6705 7.099 14.1395L15.034 17.6655C15.021 17.7765 15 17.8865 15 18.0005C15 19.6545 16.346 21.0005 18 21.0005C19.654 21.0005 21 19.6545 21 18.0005C21 16.3465 19.654 15.0005 18 15.0005Z"/></mask><g mask="url(#Sharemask0)"><g id="Share&#Share240;&#Share159;&#Share142;&#Share168; Color"><rect id="ShareBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Share-oIcon/Outline/share"><path id="Share-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M18 19C17.448 19 17 18.552 17 18C17 17.448 17.448 17 18 17C18.552 17 19 17.448 19 18C19 18.552 18.552 19 18 19ZM5 13C4.448 13 4 12.552 4 12C4 11.448 4.448 11 5 11C5.552 11 6 11.448 6 12C6 12.552 5.552 13 5 13ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM18 15C17.183 15 16.443 15.33 15.901 15.861L7.966 12.335C7.979 12.224 8 12.114 8 12C8 11.886 7.979 11.776 7.966 11.665L15.901 8.139C16.443 8.67 17.183 9 18 9C19.654 9 21 7.654 21 6C21 4.346 19.654 3 18 3C16.346 3 15 4.346 15 6C15 6.114 15.021 6.224 15.034 6.335L7.099 9.861C6.557 9.33 5.817 9 5 9C3.346 9 2 10.346 2 12C2 13.654 3.346 15 5 15C5.817 15 6.557 14.67 7.099 14.139L15.034 17.665C15.021 17.776 15 17.886 15 18C15 19.654 16.346 21 18 21C19.654 21 21 19.654 21 18C21 16.346 19.654 15 18 15Z"/><mask id="Share-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="19" height="18"><path id="Share-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M18 19C17.448 19 17 18.552 17 18C17 17.448 17.448 17 18 17C18.552 17 19 17.448 19 18C19 18.552 18.552 19 18 19ZM5 13C4.448 13 4 12.552 4 12C4 11.448 4.448 11 5 11C5.552 11 6 11.448 6 12C6 12.552 5.552 13 5 13ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM18 15C17.183 15 16.443 15.33 15.901 15.861L7.966 12.335C7.979 12.224 8 12.114 8 12C8 11.886 7.979 11.776 7.966 11.665L15.901 8.139C16.443 8.67 17.183 9 18 9C19.654 9 21 7.654 21 6C21 4.346 19.654 3 18 3C16.346 3 15 4.346 15 6C15 6.114 15.021 6.224 15.034 6.335L7.099 9.861C6.557 9.33 5.817 9 5 9C3.346 9 2 10.346 2 12C2 13.654 3.346 15 5 15C5.817 15 6.557 14.67 7.099 14.139L15.034 17.665C15.021 17.776 15 17.886 15 18C15 19.654 16.346 21 18 21C19.654 21 21 19.654 21 18C21 16.346 19.654 15 18 15Z"/></mask><g mask="url(#Share-omask0)"><g id="Share-o&#Share-o240;&#Share-o159;&#Share-o142;&#Share-o168; Color"><rect id="Share-oBase" width="24" height="24"/></g></g></g></g>,
    })
))