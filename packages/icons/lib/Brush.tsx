/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="BrushIcon/Fill/brush"><path id="BrushMask" fill-rule="evenodd" clip-rule="evenodd" d="M16.3757 4.66789C17.1527 3.89089 18.4227 3.75289 19.2617 4.46089C19.7547 4.87789 20.0077 5.4629 19.9997 6.0569C20.0067 6.59389 19.8017 7.12289 19.3977 7.52689L12.9127 14.0179C12.7297 14.2019 12.4317 14.2019 12.2477 14.0179L9.97466 11.7429C9.79066 11.5589 9.79066 11.2599 9.97466 11.0759L16.3757 4.66789ZM4.05396 16.4139C4.08596 14.5779 5.32896 12.9179 7.12396 12.5479C10.047 11.9449 12.462 14.7419 11.167 17.7379C10.583 19.0879 9.19596 19.9149 7.72696 19.9409H7.72496L4.47896 19.9999C4.21296 20.0049 3.99496 19.7869 3.99996 19.5209L4.05396 16.4139Z"/><mask id="Brushmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="17" height="16"><path id="BrushMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M16.3757 4.66789C17.1527 3.89089 18.4227 3.75289 19.2617 4.46089C19.7547 4.87789 20.0077 5.4629 19.9997 6.0569C20.0067 6.59389 19.8017 7.12289 19.3977 7.52689L12.9127 14.0179C12.7297 14.2019 12.4317 14.2019 12.2477 14.0179L9.97466 11.7429C9.79066 11.5589 9.79066 11.2599 9.97466 11.0759L16.3757 4.66789ZM4.05396 16.4139C4.08596 14.5779 5.32896 12.9179 7.12396 12.5479C10.047 11.9449 12.462 14.7419 11.167 17.7379C10.583 19.0879 9.19596 19.9149 7.72696 19.9409H7.72496L4.47896 19.9999C4.21296 20.0049 3.99496 19.7869 3.99996 19.5209L4.05396 16.4139Z"/></mask><g mask="url(#Brushmask0)"><g id="Brush&#Brush240;&#Brush159;&#Brush142;&#Brush168; Color"><rect id="BrushBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Brush-oIcon/Outline/brush"><path id="Brush-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M17.7656 7.39259L11.8986 13.2576C11.7476 13.0316 11.5746 12.8176 11.3776 12.6216C11.1806 12.4246 10.9666 12.2526 10.7406 12.1046L16.6096 6.23759C16.9156 5.93059 17.4576 5.92959 17.7666 6.23859C17.9196 6.39159 18.0026 6.59159 17.9996 6.82759C18.0026 7.03859 17.9186 7.23859 17.7656 7.39259ZM8.24559 17.9406L6.01759 17.9816L6.05659 15.7506C6.07759 14.4846 7.12659 13.4346 8.39559 13.4126C8.40959 13.4126 8.42159 13.4116 8.43559 13.4116C9.01959 13.4116 9.56059 13.6316 9.96359 14.0356C10.3766 14.4476 10.5976 15.0036 10.5876 15.6016C10.5666 16.8696 9.51559 17.9186 8.24559 17.9406ZM19.9996 6.82759C20.0096 6.07159 19.7176 5.35959 19.1806 4.82359C18.1186 3.76259 16.2556 3.75959 15.1956 4.82359L8.58259 11.4336C8.50759 11.4296 8.43559 11.4136 8.36059 11.4126C6.02659 11.4546 4.09559 13.3856 4.05659 15.7166L3.99959 18.9826C3.99459 19.2536 4.10159 19.5156 4.29259 19.7066C4.48059 19.8946 4.73559 19.9996 4.99959 19.9996H5.01859L8.28459 19.9406C10.6166 19.8996 12.5466 17.9686 12.5876 15.6356C12.5886 15.5606 12.5726 15.4896 12.5706 15.4136L19.1796 8.80659C19.7176 8.26859 20.0096 7.55659 19.9996 6.82759Z"/><mask id="Brush-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="17" height="16"><path id="Brush-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.7656 7.39259L11.8986 13.2576C11.7476 13.0316 11.5746 12.8176 11.3776 12.6216C11.1806 12.4246 10.9666 12.2526 10.7406 12.1046L16.6096 6.23759C16.9156 5.93059 17.4576 5.92959 17.7666 6.23859C17.9196 6.39159 18.0026 6.59159 17.9996 6.82759C18.0026 7.03859 17.9186 7.23859 17.7656 7.39259ZM8.24559 17.9406L6.01759 17.9816L6.05659 15.7506C6.07759 14.4846 7.12659 13.4346 8.39559 13.4126C8.40959 13.4126 8.42159 13.4116 8.43559 13.4116C9.01959 13.4116 9.56059 13.6316 9.96359 14.0356C10.3766 14.4476 10.5976 15.0036 10.5876 15.6016C10.5666 16.8696 9.51559 17.9186 8.24559 17.9406ZM19.9996 6.82759C20.0096 6.07159 19.7176 5.35959 19.1806 4.82359C18.1186 3.76259 16.2556 3.75959 15.1956 4.82359L8.58259 11.4336C8.50759 11.4296 8.43559 11.4136 8.36059 11.4126C6.02659 11.4546 4.09559 13.3856 4.05659 15.7166L3.99959 18.9826C3.99459 19.2536 4.10159 19.5156 4.29259 19.7066C4.48059 19.8946 4.73559 19.9996 4.99959 19.9996H5.01859L8.28459 19.9406C10.6166 19.8996 12.5466 17.9686 12.5876 15.6356C12.5886 15.5606 12.5726 15.4896 12.5706 15.4136L19.1796 8.80659C19.7176 8.26859 20.0096 7.55659 19.9996 6.82759Z"/></mask><g mask="url(#Brush-omask0)"><g id="Brush-o&#Brush-o240;&#Brush-o159;&#Brush-o142;&#Brush-o168; Color"><rect id="Brush-oBase" width="24" height="24"/></g></g></g></g>,
    })
))