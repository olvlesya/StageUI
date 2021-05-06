/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="GiftIcon/Fill/gift"><path id="GiftMask" fill-rule="evenodd" clip-rule="evenodd" d="M18.4434 21H12.8184V15.272H19.3634V20.091C19.3634 20.593 18.9514 21 18.4434 21ZM4.63673 20.0905V15.2725H11.1817V21.0005H5.55673C5.04873 21.0005 4.63673 20.5925 4.63673 20.0905ZM20.0996 7.0908H18.2576C18.4366 6.7178 18.5456 6.3048 18.5456 5.8628C18.5456 4.2848 17.2606 2.9998 15.6816 2.9998C13.8006 2.9998 12.6606 4.3198 11.9996 5.5688C11.3386 4.3198 10.1996 2.9998 8.31863 2.9998C6.73963 2.9998 5.45363 4.2848 5.45363 5.8628C5.45363 6.3048 5.56363 6.7178 5.74263 7.0908H3.90063C3.40363 7.0908 2.99963 7.6768 2.99963 8.4008V12.3268C2.99963 13.0498 3.40363 13.6368 3.90063 13.6368H4.63663H11.1816V7.0908H12.8186V13.6368H19.3636H20.0996C20.5966 13.6368 20.9996 13.0498 20.9996 12.3268V8.4008C20.9996 7.6768 20.5966 7.0908 20.0996 7.0908ZM15.6816 7.0908H13.1006C13.4866 6.0748 14.2806 4.6368 15.6816 4.6368C16.3586 4.6368 16.9096 5.1868 16.9096 5.8628C16.9096 6.5398 16.3586 7.0908 15.6816 7.0908ZM8.31863 7.0908C7.64163 7.0908 7.09063 6.5398 7.09063 5.8628C7.09063 5.1868 7.64163 4.6368 8.31863 4.6368C9.71963 4.6368 10.5136 6.0748 10.8996 7.0908H8.31863Z"/><mask id="Giftmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20"><path id="GiftMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M18.4434 21H12.8184V15.272H19.3634V20.091C19.3634 20.593 18.9514 21 18.4434 21ZM4.63673 20.0905V15.2725H11.1817V21.0005H5.55673C5.04873 21.0005 4.63673 20.5925 4.63673 20.0905ZM20.0996 7.0908H18.2576C18.4366 6.7178 18.5456 6.3048 18.5456 5.8628C18.5456 4.2848 17.2606 2.9998 15.6816 2.9998C13.8006 2.9998 12.6606 4.3198 11.9996 5.5688C11.3386 4.3198 10.1996 2.9998 8.31863 2.9998C6.73963 2.9998 5.45363 4.2848 5.45363 5.8628C5.45363 6.3048 5.56363 6.7178 5.74263 7.0908H3.90063C3.40363 7.0908 2.99963 7.6768 2.99963 8.4008V12.3268C2.99963 13.0498 3.40363 13.6368 3.90063 13.6368H4.63663H11.1816V7.0908H12.8186V13.6368H19.3636H20.0996C20.5966 13.6368 20.9996 13.0498 20.9996 12.3268V8.4008C20.9996 7.6768 20.5966 7.0908 20.0996 7.0908ZM15.6816 7.0908H13.1006C13.4866 6.0748 14.2806 4.6368 15.6816 4.6368C16.3586 4.6368 16.9096 5.1868 16.9096 5.8628C16.9096 6.5398 16.3586 7.0908 15.6816 7.0908ZM8.31863 7.0908C7.64163 7.0908 7.09063 6.5398 7.09063 5.8628C7.09063 5.1868 7.64163 4.6368 8.31863 4.6368C9.71963 4.6368 10.5136 6.0748 10.8996 7.0908H8.31863Z"/></mask><g mask="url(#Giftmask0)"><g id="Gift&#Gift240;&#Gift159;&#Gift142;&#Gift168; Color"><rect id="GiftBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Gift-oIcon/Outline/gift"><path id="Gift-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M13 19H17.5V15H13V19ZM6.5 19H11V15H6.5V19ZM5 9.2C5 9.117 5.013 9.05 5.026 9H8.143H11V13H5.026C5.013 12.95 5 12.883 5 12.8V9.2ZM7 6C7 5.448 7.513 5 8.143 5C9.4 5 10.17 6.09 10.594 7H8.143C7.513 7 7 6.552 7 6ZM15.857 5C16.487 5 17 5.448 17 6C17 6.552 16.487 7 15.857 7H13.4C13.82 6.09 14.588 5 15.857 5ZM19 9.2V12.8C19 12.883 18.987 12.95 18.974 13H13V9H15.857H18.974C18.987 9.05 19 9.117 19 9.2ZM19.2 7H18.807C18.925 6.686 19 6.353 19 6C19 4.346 17.59 3 15.857 3C13.935 3 12.729 4.199 12 5.397C11.271 4.199 10.065 3 8.143 3C6.41 3 5 4.346 5 6C5 6.353 5.076 6.686 5.193 7H4.8C3.791 7 3 7.967 3 9.2V12.8C3 13.907 3.64 14.793 4.5 14.964V19.333C4.5 20.252 5.313 21 6.312 21H17.687C18.687 21 19.5 20.252 19.5 19.333V14.964C20.36 14.793 21 13.907 21 12.8V9.2C21 7.967 20.209 7 19.2 7Z"/><mask id="Gift-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18"><path id="Gift-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M13 19H17.5V15H13V19ZM6.5 19H11V15H6.5V19ZM5 9.2C5 9.117 5.013 9.05 5.026 9H8.143H11V13H5.026C5.013 12.95 5 12.883 5 12.8V9.2ZM7 6C7 5.448 7.513 5 8.143 5C9.4 5 10.17 6.09 10.594 7H8.143C7.513 7 7 6.552 7 6ZM15.857 5C16.487 5 17 5.448 17 6C17 6.552 16.487 7 15.857 7H13.4C13.82 6.09 14.588 5 15.857 5ZM19 9.2V12.8C19 12.883 18.987 12.95 18.974 13H13V9H15.857H18.974C18.987 9.05 19 9.117 19 9.2ZM19.2 7H18.807C18.925 6.686 19 6.353 19 6C19 4.346 17.59 3 15.857 3C13.935 3 12.729 4.199 12 5.397C11.271 4.199 10.065 3 8.143 3C6.41 3 5 4.346 5 6C5 6.353 5.076 6.686 5.193 7H4.8C3.791 7 3 7.967 3 9.2V12.8C3 13.907 3.64 14.793 4.5 14.964V19.333C4.5 20.252 5.313 21 6.312 21H17.687C18.687 21 19.5 20.252 19.5 19.333V14.964C20.36 14.793 21 13.907 21 12.8V9.2C21 7.967 20.209 7 19.2 7Z"/></mask><g mask="url(#Gift-omask0)"><g id="Gift-o&#Gift-o240;&#Gift-o159;&#Gift-o142;&#Gift-o168; Color"><rect id="Gift-oBase" width="24" height="24"/></g></g></g></g>,
    })
))