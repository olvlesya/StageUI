/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="LayersIcon/Fill/layers"><path id="LayersMask" fill-rule="evenodd" clip-rule="evenodd" d="M3.2407 7.28709L11.7617 11.9231C11.9087 12.0031 12.0907 12.0031 12.2387 11.9231L20.7597 7.28709C21.1027 7.10009 21.0727 6.62209 20.7077 6.47509L12.1877 3.03609C12.0677 2.98809 11.9317 2.98809 11.8117 3.03609L3.2917 6.47509C2.9277 6.62209 2.8977 7.10009 3.2407 7.28709ZM20.708 10.6563L18.878 9.87629L12.239 13.4883C12.091 13.5683 11.909 13.5683 11.761 13.4883L5.122 9.87629L3.292 10.6563C2.927 10.8113 2.897 11.3173 3.241 11.5143L11.761 16.4113C11.909 16.4963 12.091 16.4963 12.239 16.4113L20.759 11.5143C21.103 11.3173 21.073 10.8113 20.708 10.6563ZM19.151 14.4227L20.708 15.0967C21.073 15.2547 21.103 15.7677 20.759 15.9677L12.239 20.9357C12.091 21.0217 11.909 21.0217 11.761 20.9357L3.241 15.9677C2.897 15.7677 2.927 15.2547 3.292 15.0967L4.849 14.4227L11.761 18.1837C11.909 18.2637 12.091 18.2637 12.239 18.1837L19.151 14.4227Z"/><mask id="Layersmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="3" width="20" height="19"><path id="LayersMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M3.2407 7.28709L11.7617 11.9231C11.9087 12.0031 12.0907 12.0031 12.2387 11.9231L20.7597 7.28709C21.1027 7.10009 21.0727 6.62209 20.7077 6.47509L12.1877 3.03609C12.0677 2.98809 11.9317 2.98809 11.8117 3.03609L3.2917 6.47509C2.9277 6.62209 2.8977 7.10009 3.2407 7.28709ZM20.708 10.6563L18.878 9.87629L12.239 13.4883C12.091 13.5683 11.909 13.5683 11.761 13.4883L5.122 9.87629L3.292 10.6563C2.927 10.8113 2.897 11.3173 3.241 11.5143L11.761 16.4113C11.909 16.4963 12.091 16.4963 12.239 16.4113L20.759 11.5143C21.103 11.3173 21.073 10.8113 20.708 10.6563ZM19.151 14.4227L20.708 15.0967C21.073 15.2547 21.103 15.7677 20.759 15.9677L12.239 20.9357C12.091 21.0217 11.909 21.0217 11.761 20.9357L3.241 15.9677C2.897 15.7677 2.927 15.2547 3.292 15.0967L4.849 14.4227L11.761 18.1837C11.909 18.2637 12.091 18.2637 12.239 18.1837L19.151 14.4227Z"/></mask><g mask="url(#Layersmask0)"><g id="Layers&#Layers240;&#Layers159;&#Layers142;&#Layers168; Color"><rect id="LayersBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Layers-oIcon/Outline/layers"><path id="Layers-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M17.7603 15.54L12.0003 18.847L6.2403 15.54L7.9343 14.819L11.5023 16.867C11.6563 16.956 11.8283 17 12.0003 17C12.1723 17 12.3433 16.956 12.4983 16.867L16.0663 14.818L17.7603 15.54ZM11.5023 12.867C11.6563 12.956 11.8283 13 12.0003 13C12.1723 13 12.3433 12.956 12.4983 12.867L16.0663 10.818L17.7603 11.54L12.0003 14.847L6.2403 11.54L7.9343 10.818L11.5023 12.867ZM12.0003 5.08701L17.7603 7.54001L12.0003 10.847L6.2403 7.54001L12.0003 5.08701ZM20.9983 11.348C20.9753 10.969 20.7403 10.636 20.3913 10.487L18.2393 9.57101L20.4983 8.27401C20.8273 8.08601 21.0203 7.72701 20.9983 7.34801C20.9753 6.97001 20.7403 6.63601 20.3913 6.48701L12.3913 3.08001C12.1413 2.97301 11.8583 2.97301 11.6083 3.08001L3.6083 6.48701C3.2593 6.63601 3.0243 6.97001 3.0023 7.34801C2.9793 7.72701 3.1733 8.08601 3.5023 8.27401L5.7603 9.57101L3.6083 10.487C3.2593 10.636 3.0243 10.969 3.0023 11.348C2.9793 11.727 3.1733 12.086 3.5023 12.274L5.7603 13.571L3.6083 14.487C3.2593 14.636 3.0243 14.969 3.0023 15.348C2.9793 15.727 3.1733 16.086 3.5023 16.274L11.5023 20.867C11.6563 20.956 11.8283 21 12.0003 21C12.1723 21 12.3433 20.956 12.4983 20.867L20.4983 16.274C20.8273 16.086 21.0203 15.727 20.9983 15.348C20.9753 14.97 20.7403 14.636 20.3923 14.487L18.2403 13.57L20.4983 12.274C20.8273 12.086 21.0203 11.727 20.9983 11.348Z"/><mask id="Layers-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="19"><path id="Layers-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.7603 15.54L12.0003 18.847L6.2403 15.54L7.9343 14.819L11.5023 16.867C11.6563 16.956 11.8283 17 12.0003 17C12.1723 17 12.3433 16.956 12.4983 16.867L16.0663 14.818L17.7603 15.54ZM11.5023 12.867C11.6563 12.956 11.8283 13 12.0003 13C12.1723 13 12.3433 12.956 12.4983 12.867L16.0663 10.818L17.7603 11.54L12.0003 14.847L6.2403 11.54L7.9343 10.818L11.5023 12.867ZM12.0003 5.08701L17.7603 7.54001L12.0003 10.847L6.2403 7.54001L12.0003 5.08701ZM20.9983 11.348C20.9753 10.969 20.7403 10.636 20.3913 10.487L18.2393 9.57101L20.4983 8.27401C20.8273 8.08601 21.0203 7.72701 20.9983 7.34801C20.9753 6.97001 20.7403 6.63601 20.3913 6.48701L12.3913 3.08001C12.1413 2.97301 11.8583 2.97301 11.6083 3.08001L3.6083 6.48701C3.2593 6.63601 3.0243 6.97001 3.0023 7.34801C2.9793 7.72701 3.1733 8.08601 3.5023 8.27401L5.7603 9.57101L3.6083 10.487C3.2593 10.636 3.0243 10.969 3.0023 11.348C2.9793 11.727 3.1733 12.086 3.5023 12.274L5.7603 13.571L3.6083 14.487C3.2593 14.636 3.0243 14.969 3.0023 15.348C2.9793 15.727 3.1733 16.086 3.5023 16.274L11.5023 20.867C11.6563 20.956 11.8283 21 12.0003 21C12.1723 21 12.3433 20.956 12.4983 20.867L20.4983 16.274C20.8273 16.086 21.0203 15.727 20.9983 15.348C20.9753 14.97 20.7403 14.636 20.3923 14.487L18.2403 13.57L20.4983 12.274C20.8273 12.086 21.0203 11.727 20.9983 11.348Z"/></mask><g mask="url(#Layers-omask0)"><g id="Layers-o&#Layers-o240;&#Layers-o159;&#Layers-o142;&#Layers-o168; Color"><rect id="Layers-oBase" width="24" height="24"/></g></g></g></g>,
    })
))