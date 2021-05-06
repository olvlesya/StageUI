/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="CheckmarkIcon/Fill/checkmark"><path id="CheckmarkMask" fill-rule="evenodd" clip-rule="evenodd" d="M9.86326 18C9.58726 18 9.32326 17.886 9.13426 17.685L4.27126 12.506C3.89226 12.104 3.91326 11.471 4.31526 11.093C4.71826 10.715 5.35126 10.735 5.72826 11.137L9.85326 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87026 18H9.86326Z"/><mask id="Checkmarkmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="6" width="17" height="12"><path id="CheckmarkMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.86326 18C9.58726 18 9.32326 17.886 9.13426 17.685L4.27126 12.506C3.89226 12.104 3.91326 11.471 4.31526 11.093C4.71826 10.715 5.35126 10.735 5.72826 11.137L9.85326 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87026 18H9.86326Z"/></mask><g mask="url(#Checkmarkmask0)"><g id="Checkmark&#Checkmark240;&#Checkmark159;&#Checkmark142;&#Checkmark168; Color"><rect id="CheckmarkBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Checkmark-oIcon/Outline/checkmark"><path id="Checkmark-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z"/><mask id="Checkmark-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="6" width="16" height="12"><path id="Checkmark-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M9.86329 18C9.58729 18 9.32329 17.886 9.13429 17.685L4.27129 12.506C3.89229 12.104 3.91329 11.471 4.31529 11.093C4.71829 10.715 5.35129 10.735 5.72829 11.137L9.85329 15.528L18.2613 6.32599C18.6353 5.91699 19.2673 5.88999 19.6753 6.26199C20.0823 6.63399 20.1103 7.26699 19.7383 7.67399L10.6013 17.674C10.4143 17.88 10.1483 17.998 9.87029 18H9.86329Z"/></mask><g mask="url(#Checkmark-omask0)"><g id="Checkmark-o&#Checkmark-o240;&#Checkmark-o159;&#Checkmark-o142;&#Checkmark-o168; Color"><rect id="Checkmark-oBase" width="24" height="24"/></g></g></g></g>,
    })
))