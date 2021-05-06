/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="FileAddIcon/Fill/file-add"><path id="FileAddMask" fill-rule="evenodd" clip-rule="evenodd" d="M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM13.9999 15H12.9999V16C12.9999 16.552 12.5529 17 11.9999 17C11.4469 17 10.9999 16.552 10.9999 16V15H9.99988C9.44688 15 8.99988 14.552 8.99988 14C8.99988 13.448 9.44688 13 9.99988 13H10.9999V12C10.9999 11.448 11.4469 11 11.9999 11C12.5529 11 12.9999 11.448 12.9999 12V13H13.9999C14.5529 13 14.9999 13.448 14.9999 14C14.9999 14.552 14.5529 15 13.9999 15ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z"/><mask id="FileAddmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="17" height="20"><path id="FileAddMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M14.7139 8C14.3199 8 13.9999 7.619 13.9999 7.15V3.978L17.7419 8H14.7139ZM13.9999 15H12.9999V16C12.9999 16.552 12.5529 17 11.9999 17C11.4469 17 10.9999 16.552 10.9999 16V15H9.99988C9.44688 15 8.99988 14.552 8.99988 14C8.99988 13.448 9.44688 13 9.99988 13H10.9999V12C10.9999 11.448 11.4469 11 11.9999 11C12.5529 11 12.9999 11.448 12.9999 12V13H13.9999C14.5529 13 14.9999 13.448 14.9999 14C14.9999 14.552 14.5529 15 13.9999 15ZM19.7399 7.328L15.2959 2.328C15.1069 2.119 14.8379 2 14.5559 2H6.55588C5.14688 2 3.99988 3.122 3.99988 4.5V19.5C3.99988 20.878 5.14688 22 6.55588 22H17.4439C18.8539 22 19.9999 20.878 19.9999 19.5V8C19.9999 7.751 19.9069 7.512 19.7399 7.328Z"/></mask><g mask="url(#FileAddmask0)"><g id="FileAdd&#FileAdd240;&#FileAdd159;&#FileAdd142;&#FileAdd168; Color"><rect id="FileAddBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="FileAdd-oIcon/Outline/file-add"><path id="FileAdd-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M14 13H13V12C13 11.448 12.553 11 12 11C11.447 11 11 11.448 11 12V13H10C9.447 13 9 13.448 9 14C9 14.552 9.447 15 10 15H11V16C11 16.552 11.447 17 12 17C12.553 17 13 16.552 13 16V15H14C14.553 15 15 14.552 15 14C15 13.448 14.553 13 14 13ZM17.4443 20H6.5553C6.2493 20 6.0003 19.776 6.0003 19.5V4.5C6.0003 4.224 6.2493 4 6.5553 4H12.0003V7.15C12.0003 8.722 13.2173 10 14.7143 10H18.0003V19.5C18.0003 19.776 17.7513 20 17.4443 20ZM14.0003 4.978L16.7423 8H14.7143C14.3203 8 14.0003 7.619 14.0003 7.15V4.978ZM19.7403 8.328L14.2963 2.328C14.1063 2.119 13.8383 2 13.5553 2H6.5553C5.1463 2 4.0003 3.122 4.0003 4.5V19.5C4.0003 20.878 5.1463 22 6.5553 22H17.4443C18.8533 22 20.0003 20.878 20.0003 19.5V9C20.0003 8.751 19.9073 8.512 19.7403 8.328Z"/><mask id="FileAdd-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20"><path id="FileAdd-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M14 13H13V12C13 11.448 12.553 11 12 11C11.447 11 11 11.448 11 12V13H10C9.447 13 9 13.448 9 14C9 14.552 9.447 15 10 15H11V16C11 16.552 11.447 17 12 17C12.553 17 13 16.552 13 16V15H14C14.553 15 15 14.552 15 14C15 13.448 14.553 13 14 13ZM17.4443 20H6.5553C6.2493 20 6.0003 19.776 6.0003 19.5V4.5C6.0003 4.224 6.2493 4 6.5553 4H12.0003V7.15C12.0003 8.722 13.2173 10 14.7143 10H18.0003V19.5C18.0003 19.776 17.7513 20 17.4443 20ZM14.0003 4.978L16.7423 8H14.7143C14.3203 8 14.0003 7.619 14.0003 7.15V4.978ZM19.7403 8.328L14.2963 2.328C14.1063 2.119 13.8383 2 13.5553 2H6.5553C5.1463 2 4.0003 3.122 4.0003 4.5V19.5C4.0003 20.878 5.1463 22 6.5553 22H17.4443C18.8533 22 20.0003 20.878 20.0003 19.5V9C20.0003 8.751 19.9073 8.512 19.7403 8.328Z"/></mask><g mask="url(#FileAdd-omask0)"><g id="FileAdd-o&#FileAdd-o240;&#FileAdd-o159;&#FileAdd-o142;&#FileAdd-o168; Color"><rect id="FileAdd-oBase" width="24" height="24"/></g></g></g></g>,
    })
))