/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="Settings2Icon/Fill/settings-2"><path id="Settings2Mask" fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM20.317 9.375H19.233C19.086 9.375 18.986 9.258 18.925 9.111C18.879 9 18.867 8.846 18.972 8.741L19.742 7.975C20.06 7.658 20.236 7.235 20.236 6.787C20.236 6.337 20.062 5.915 19.744 5.598L18.403 4.257C17.749 3.601 16.682 3.603 16.026 4.257L15.256 5.028C15.152 5.133 14.998 5.12 14.853 5.06C14.743 5.015 14.625 4.914 14.625 4.767V3.676C14.625 2.752 13.874 2 12.949 2H11.057C10.129 2 9.375 2.755 9.375 3.683V4.767C9.375 4.914 9.258 5.014 9.111 5.075C9 5.122 8.845 5.134 8.741 5.028L7.976 4.259C7.658 3.94 7.236 3.765 6.787 3.765H6.785C6.336 3.765 5.914 3.939 5.597 4.257L4.257 5.597C3.602 6.251 3.602 7.317 4.257 7.974L5.028 8.744C5.132 8.848 5.12 9.003 5.06 9.147C5.015 9.257 4.914 9.375 4.767 9.375H3.676C2.752 9.375 2 10.126 2 11.051V12.943C2 13.871 2.755 14.625 3.683 14.625H4.767C4.914 14.625 5.014 14.742 5.075 14.889C5.121 15 5.133 15.154 5.028 15.259L4.259 16.024C3.94 16.342 3.765 16.764 3.765 17.213C3.764 17.663 3.939 18.085 4.257 18.403L5.597 19.743C6.251 20.399 7.318 20.397 7.974 19.743L8.744 18.972C8.849 18.869 9.003 18.881 9.147 18.94C9.257 18.985 9.375 19.086 9.375 19.233V20.324C9.375 21.248 10.126 22 11.051 22H12.943C13.871 22 14.625 21.245 14.625 20.317V19.233C14.625 19.086 14.742 18.986 14.889 18.925C14.999 18.879 15.154 18.867 15.259 18.972L16.024 19.741C16.342 20.06 16.764 20.235 17.213 20.235H17.215C17.664 20.235 18.086 20.061 18.403 19.743L19.743 18.403C20.398 17.749 20.398 16.683 19.743 16.026L18.972 15.256C18.868 15.152 18.88 14.997 18.927 14.886C18.927 14.884 18.94 14.854 18.94 14.853C18.985 14.743 19.086 14.625 19.233 14.625H20.324C21.248 14.625 22 13.874 22 12.949V11.057C22 10.129 21.245 9.375 20.317 9.375Z"/><mask id="Settings2mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20"><path id="Settings2Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5ZM20.317 9.375H19.233C19.086 9.375 18.986 9.258 18.925 9.111C18.879 9 18.867 8.846 18.972 8.741L19.742 7.975C20.06 7.658 20.236 7.235 20.236 6.787C20.236 6.337 20.062 5.915 19.744 5.598L18.403 4.257C17.749 3.601 16.682 3.603 16.026 4.257L15.256 5.028C15.152 5.133 14.998 5.12 14.853 5.06C14.743 5.015 14.625 4.914 14.625 4.767V3.676C14.625 2.752 13.874 2 12.949 2H11.057C10.129 2 9.375 2.755 9.375 3.683V4.767C9.375 4.914 9.258 5.014 9.111 5.075C9 5.122 8.845 5.134 8.741 5.028L7.976 4.259C7.658 3.94 7.236 3.765 6.787 3.765H6.785C6.336 3.765 5.914 3.939 5.597 4.257L4.257 5.597C3.602 6.251 3.602 7.317 4.257 7.974L5.028 8.744C5.132 8.848 5.12 9.003 5.06 9.147C5.015 9.257 4.914 9.375 4.767 9.375H3.676C2.752 9.375 2 10.126 2 11.051V12.943C2 13.871 2.755 14.625 3.683 14.625H4.767C4.914 14.625 5.014 14.742 5.075 14.889C5.121 15 5.133 15.154 5.028 15.259L4.259 16.024C3.94 16.342 3.765 16.764 3.765 17.213C3.764 17.663 3.939 18.085 4.257 18.403L5.597 19.743C6.251 20.399 7.318 20.397 7.974 19.743L8.744 18.972C8.849 18.869 9.003 18.881 9.147 18.94C9.257 18.985 9.375 19.086 9.375 19.233V20.324C9.375 21.248 10.126 22 11.051 22H12.943C13.871 22 14.625 21.245 14.625 20.317V19.233C14.625 19.086 14.742 18.986 14.889 18.925C14.999 18.879 15.154 18.867 15.259 18.972L16.024 19.741C16.342 20.06 16.764 20.235 17.213 20.235H17.215C17.664 20.235 18.086 20.061 18.403 19.743L19.743 18.403C20.398 17.749 20.398 16.683 19.743 16.026L18.972 15.256C18.868 15.152 18.88 14.997 18.927 14.886C18.927 14.884 18.94 14.854 18.94 14.853C18.985 14.743 19.086 14.625 19.233 14.625H20.324C21.248 14.625 22 13.874 22 12.949V11.057C22 10.129 21.245 9.375 20.317 9.375Z"/></mask><g mask="url(#Settings2mask0)"><g id="Settings2&#Settings2240;&#Settings2159;&#Settings2142;&#Settings2168; Color"><rect id="Settings2Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Settings2-oIcon/Outline/settings-2"><path id="Settings2-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M11.3745 20H12.6255V19.233C12.6255 18.298 13.2005 17.458 14.0895 17.091C15.0095 16.708 16.0145 16.896 16.6765 17.562L17.2155 18.103L18.1035 17.215L17.5585 16.671C16.8955 16.009 16.7085 15.005 17.0815 14.114C17.0815 14.114 17.0825 14.113 17.0825 14.112L17.0935 14.084C17.4575 13.201 18.2985 12.625 19.2335 12.625H19.9995V11.375H19.2335C18.2985 11.375 17.4575 10.8 17.0915 9.911C16.7065 8.991 16.8955 7.986 17.5615 7.323L18.1025 6.784L17.2155 5.897L16.6705 6.442C16.0085 7.104 15.0055 7.291 14.1145 6.919C13.2015 6.542 12.6255 5.702 12.6255 4.767V4H11.3745V4.767C11.3745 5.702 10.7995 6.542 9.9105 6.909C8.9915 7.294 7.9865 7.105 7.3235 6.438L6.7845 5.897L5.8965 6.785L6.4415 7.329C7.1035 7.991 7.2915 8.995 6.9185 9.886C6.5425 10.799 5.7015 11.375 4.7665 11.375H3.9995V12.625H4.7665C5.7015 12.625 6.5425 13.2 6.9085 14.089C7.2935 15.009 7.1045 16.014 6.4385 16.677L5.8975 17.216L6.7845 18.103L7.3295 17.558C7.9915 16.896 8.9945 16.709 9.8855 17.081C10.7985 17.458 11.3745 18.298 11.3745 19.233V20ZM12.9425 22H11.0505C10.1265 22 9.3745 21.248 9.3745 20.324V19.233C9.3745 19.086 9.2575 18.985 9.1475 18.94C9.0035 18.881 8.8495 18.869 8.7435 18.972L7.9735 19.743C7.3175 20.397 6.2515 20.399 5.5965 19.743L4.2565 18.403C3.9385 18.085 3.7645 17.663 3.7645 17.213C3.7655 16.764 3.9405 16.342 4.2595 16.024L5.0275 15.259C5.1325 15.154 5.1215 15 5.0745 14.889C5.0145 14.742 4.9145 14.625 4.7665 14.625H3.6825C2.7545 14.625 1.9995 13.871 1.9995 12.943V11.051C1.9995 10.126 2.7515 9.375 3.6765 9.375H4.7665C4.9135 9.375 5.0145 9.257 5.0595 9.147C5.1195 9.003 5.1315 8.848 5.0275 8.744L4.2565 7.974C3.6025 7.317 3.6025 6.251 4.2565 5.597L5.5965 4.257C5.9145 3.939 6.3355 3.765 6.7845 3.765H6.7865C7.2355 3.765 7.6585 3.94 7.9755 4.259L8.7405 5.028C8.8455 5.134 9.0005 5.122 9.1115 5.075C9.2575 5.014 9.3745 4.914 9.3745 4.767V3.683C9.3745 2.755 10.1295 2 11.0575 2H12.9495C13.8735 2 14.6255 2.752 14.6255 3.676V4.767C14.6255 4.914 14.7425 5.015 14.8525 5.06C14.9975 5.12 15.1515 5.133 15.2565 5.028L16.0265 4.257C16.6825 3.603 17.7485 3.601 18.4035 4.257L19.7445 5.598C20.0625 5.915 20.2365 6.337 20.2355 6.787C20.2355 7.235 20.0605 7.658 19.7415 7.975L18.9725 8.741C18.8675 8.846 18.8785 9 18.9255 9.111C18.9855 9.258 19.0855 9.375 19.2335 9.375H20.3175C21.2455 9.375 21.9995 10.129 21.9995 11.057V12.949C21.9995 13.874 21.2485 14.625 20.3235 14.625H19.2335C19.0865 14.625 18.9855 14.743 18.9405 14.853C18.9395 14.854 18.9275 14.884 18.9265 14.886C18.8805 14.997 18.8685 15.152 18.9725 15.256L19.7435 16.026C20.3975 16.683 20.3975 17.749 19.7435 18.403L18.4035 19.743C18.0855 20.061 17.6645 20.235 17.2155 20.235H17.2135C16.7645 20.235 16.3415 20.06 16.0245 19.741L15.2595 18.972C15.1545 18.867 14.9985 18.879 14.8885 18.925C14.7425 18.986 14.6255 19.086 14.6255 19.233V20.317C14.6255 21.245 13.8705 22 12.9425 22ZM12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"/><mask id="Settings2-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20"><path id="Settings2-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M11.3745 20H12.6255V19.233C12.6255 18.298 13.2005 17.458 14.0895 17.091C15.0095 16.708 16.0145 16.896 16.6765 17.562L17.2155 18.103L18.1035 17.215L17.5585 16.671C16.8955 16.009 16.7085 15.005 17.0815 14.114C17.0815 14.114 17.0825 14.113 17.0825 14.112L17.0935 14.084C17.4575 13.201 18.2985 12.625 19.2335 12.625H19.9995V11.375H19.2335C18.2985 11.375 17.4575 10.8 17.0915 9.911C16.7065 8.991 16.8955 7.986 17.5615 7.323L18.1025 6.784L17.2155 5.897L16.6705 6.442C16.0085 7.104 15.0055 7.291 14.1145 6.919C13.2015 6.542 12.6255 5.702 12.6255 4.767V4H11.3745V4.767C11.3745 5.702 10.7995 6.542 9.9105 6.909C8.9915 7.294 7.9865 7.105 7.3235 6.438L6.7845 5.897L5.8965 6.785L6.4415 7.329C7.1035 7.991 7.2915 8.995 6.9185 9.886C6.5425 10.799 5.7015 11.375 4.7665 11.375H3.9995V12.625H4.7665C5.7015 12.625 6.5425 13.2 6.9085 14.089C7.2935 15.009 7.1045 16.014 6.4385 16.677L5.8975 17.216L6.7845 18.103L7.3295 17.558C7.9915 16.896 8.9945 16.709 9.8855 17.081C10.7985 17.458 11.3745 18.298 11.3745 19.233V20ZM12.9425 22H11.0505C10.1265 22 9.3745 21.248 9.3745 20.324V19.233C9.3745 19.086 9.2575 18.985 9.1475 18.94C9.0035 18.881 8.8495 18.869 8.7435 18.972L7.9735 19.743C7.3175 20.397 6.2515 20.399 5.5965 19.743L4.2565 18.403C3.9385 18.085 3.7645 17.663 3.7645 17.213C3.7655 16.764 3.9405 16.342 4.2595 16.024L5.0275 15.259C5.1325 15.154 5.1215 15 5.0745 14.889C5.0145 14.742 4.9145 14.625 4.7665 14.625H3.6825C2.7545 14.625 1.9995 13.871 1.9995 12.943V11.051C1.9995 10.126 2.7515 9.375 3.6765 9.375H4.7665C4.9135 9.375 5.0145 9.257 5.0595 9.147C5.1195 9.003 5.1315 8.848 5.0275 8.744L4.2565 7.974C3.6025 7.317 3.6025 6.251 4.2565 5.597L5.5965 4.257C5.9145 3.939 6.3355 3.765 6.7845 3.765H6.7865C7.2355 3.765 7.6585 3.94 7.9755 4.259L8.7405 5.028C8.8455 5.134 9.0005 5.122 9.1115 5.075C9.2575 5.014 9.3745 4.914 9.3745 4.767V3.683C9.3745 2.755 10.1295 2 11.0575 2H12.9495C13.8735 2 14.6255 2.752 14.6255 3.676V4.767C14.6255 4.914 14.7425 5.015 14.8525 5.06C14.9975 5.12 15.1515 5.133 15.2565 5.028L16.0265 4.257C16.6825 3.603 17.7485 3.601 18.4035 4.257L19.7445 5.598C20.0625 5.915 20.2365 6.337 20.2355 6.787C20.2355 7.235 20.0605 7.658 19.7415 7.975L18.9725 8.741C18.8675 8.846 18.8785 9 18.9255 9.111C18.9855 9.258 19.0855 9.375 19.2335 9.375H20.3175C21.2455 9.375 21.9995 10.129 21.9995 11.057V12.949C21.9995 13.874 21.2485 14.625 20.3235 14.625H19.2335C19.0865 14.625 18.9855 14.743 18.9405 14.853C18.9395 14.854 18.9275 14.884 18.9265 14.886C18.8805 14.997 18.8685 15.152 18.9725 15.256L19.7435 16.026C20.3975 16.683 20.3975 17.749 19.7435 18.403L18.4035 19.743C18.0855 20.061 17.6645 20.235 17.2155 20.235H17.2135C16.7645 20.235 16.3415 20.06 16.0245 19.741L15.2595 18.972C15.1545 18.867 14.9985 18.879 14.8885 18.925C14.7425 18.986 14.6255 19.086 14.6255 19.233V20.317C14.6255 21.245 13.8705 22 12.9425 22ZM12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.5 13.93 8.5 12C8.5 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z"/></mask><g mask="url(#Settings2-omask0)"><g id="Settings2-o&#Settings2-o240;&#Settings2-o159;&#Settings2-o142;&#Settings2-o168; Color"><rect id="Settings2-oBase" width="24" height="24"/></g></g></g></g>,
    })
))