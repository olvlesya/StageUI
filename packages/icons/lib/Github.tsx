/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="GithubIcon/Fill/github"><path id="GithubMask" fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 1C5.92551 1 0.999512 5.82 0.999512 11.767C0.999512 16.522 4.15151 20.558 8.52251 21.981C9.07351 22.08 9.27351 21.748 9.27351 21.462C9.27351 21.207 9.26451 20.529 9.25951 19.632C6.19951 20.282 5.55451 18.188 5.55451 18.188C5.05351 16.944 4.33251 16.613 4.33251 16.613C3.33351 15.945 4.40851 15.959 4.40851 15.959C5.51251 16.035 6.09251 17.068 6.09251 17.068C7.07351 18.714 8.66651 18.238 9.29451 17.963C9.39451 17.268 9.67751 16.793 9.99251 16.523C7.54951 16.252 4.98151 15.328 4.98151 11.203C4.98151 10.028 5.41051 9.067 6.11451 8.314C6.00051 8.042 5.62351 6.947 6.22151 5.465C6.22151 5.465 7.14551 5.176 9.24751 6.568C10.1245 6.329 11.0655 6.211 12.0005 6.206C12.9345 6.211 13.8755 6.329 14.7545 6.568C16.8545 5.176 17.7765 5.465 17.7765 5.465C18.3765 6.947 17.9995 8.042 17.8855 8.314C18.5905 9.067 19.0165 10.028 19.0165 11.203C19.0165 15.339 16.4445 16.249 13.9945 16.516C14.3895 16.848 14.7405 17.505 14.7405 18.509C14.7405 19.948 14.7275 21.109 14.7275 21.462C14.7275 21.75 14.9255 22.085 15.4835 21.98C19.8505 20.554 22.9995 16.521 22.9995 11.767C22.9995 5.82 18.0745 1 11.9995 1Z"/><mask id="Githubmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="1" width="23" height="21"><path id="GithubMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 1C5.92551 1 0.999512 5.82 0.999512 11.767C0.999512 16.522 4.15151 20.558 8.52251 21.981C9.07351 22.08 9.27351 21.748 9.27351 21.462C9.27351 21.207 9.26451 20.529 9.25951 19.632C6.19951 20.282 5.55451 18.188 5.55451 18.188C5.05351 16.944 4.33251 16.613 4.33251 16.613C3.33351 15.945 4.40851 15.959 4.40851 15.959C5.51251 16.035 6.09251 17.068 6.09251 17.068C7.07351 18.714 8.66651 18.238 9.29451 17.963C9.39451 17.268 9.67751 16.793 9.99251 16.523C7.54951 16.252 4.98151 15.328 4.98151 11.203C4.98151 10.028 5.41051 9.067 6.11451 8.314C6.00051 8.042 5.62351 6.947 6.22151 5.465C6.22151 5.465 7.14551 5.176 9.24751 6.568C10.1245 6.329 11.0655 6.211 12.0005 6.206C12.9345 6.211 13.8755 6.329 14.7545 6.568C16.8545 5.176 17.7765 5.465 17.7765 5.465C18.3765 6.947 17.9995 8.042 17.8855 8.314C18.5905 9.067 19.0165 10.028 19.0165 11.203C19.0165 15.339 16.4445 16.249 13.9945 16.516C14.3895 16.848 14.7405 17.505 14.7405 18.509C14.7405 19.948 14.7275 21.109 14.7275 21.462C14.7275 21.75 14.9255 22.085 15.4835 21.98C19.8505 20.554 22.9995 16.521 22.9995 11.767C22.9995 5.82 18.0745 1 11.9995 1Z"/></mask><g mask="url(#Githubmask0)"><g id="Github&#Github240;&#Github159;&#Github142;&#Github168; Color"><rect id="GithubBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="Github-oIcon/Outline/github"><path id="Github-oMask" fill-rule="evenodd" clip-rule="evenodd" d="M16.2402 22C15.6882 22 15.2402 21.553 15.2402 21V18.401C15.2872 17.738 15.0882 17.161 14.6972 16.742C14.4382 16.466 14.3582 16.068 14.4882 15.714C14.6182 15.359 14.9362 15.108 15.3122 15.065C17.7462 14.783 20.0002 13.947 20.0002 9.77401C20.0002 8.97401 19.7682 8.20301 19.3292 7.54701C18.9282 6.94901 18.7822 6.22001 18.9162 5.49401C19.0042 5.02101 18.9992 4.54001 18.9042 4.07501C18.5002 4.19501 17.8082 4.48001 16.8112 5.17401C16.5662 5.34401 16.2552 5.39501 15.9692 5.31501C14.1652 4.80801 12.2582 4.80801 10.4532 5.31501C10.1662 5.39501 9.85719 5.34401 9.61219 5.17401C8.62519 4.48701 7.93719 4.20101 7.51719 4.08301C7.42319 4.54401 7.41919 5.02101 7.50619 5.49101C7.63919 6.21301 7.48819 6.95001 7.08019 7.56801C6.64619 8.22701 6.41919 8.99701 6.42319 9.79701C6.42319 13.691 8.30219 14.73 11.1232 15.093C11.4952 15.141 11.8092 15.393 11.9372 15.746C12.0642 16.099 11.9832 16.493 11.7272 16.767C11.3402 17.182 11.1412 17.753 11.1802 18.334L11.1812 19.122C11.1832 19.162 11.1832 19.202 11.1812 19.242L11.1822 21C11.1822 21.553 10.7352 22 10.1822 22C9.63019 22 9.18219 21.553 9.18219 21V20.429C6.49719 20.779 4.96719 19.34 3.90619 18.34C3.46619 17.927 3.05219 17.536 2.74919 17.457C2.21419 17.318 1.89319 16.772 2.03219 16.238C2.17119 15.704 2.71719 15.378 3.25119 15.521C4.05019 15.729 4.64619 16.29 5.27719 16.884C6.29919 17.847 7.26919 18.759 9.18219 18.404V18.401C9.14519 17.872 9.22419 17.33 9.40719 16.817C7.35319 16.305 4.42319 14.812 4.42319 9.80201C4.41719 8.61001 4.75919 7.45601 5.41019 6.46701C5.53219 6.28201 5.57819 6.06501 5.53919 5.85401C5.33919 4.77101 5.45419 3.65901 5.87419 2.64301C5.98819 2.36701 6.21919 2.15601 6.50419 2.06801C6.83519 1.96601 8.05519 1.77101 10.3662 3.27101C12.2372 2.82201 14.1862 2.82201 16.0562 3.27101C18.3682 1.77101 19.5872 1.96501 19.9182 2.06801C20.2032 2.15601 20.4342 2.36701 20.5482 2.64301C20.9692 3.66101 21.0842 4.77201 20.8832 5.85801C20.8442 6.06701 20.8832 6.27201 20.9912 6.43501C21.6512 7.42201 22.0002 8.57601 22.0002 9.77401C22.0002 14.838 19.0772 16.313 17.0202 16.807C17.2042 17.336 17.2812 17.905 17.2372 18.478L17.2402 21C17.2402 21.553 16.7922 22 16.2402 22Z"/><mask id="Github-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="21"><path id="Github-oMask_2" fill-rule="evenodd" clip-rule="evenodd" d="M16.2402 22C15.6882 22 15.2402 21.553 15.2402 21V18.401C15.2872 17.738 15.0882 17.161 14.6972 16.742C14.4382 16.466 14.3582 16.068 14.4882 15.714C14.6182 15.359 14.9362 15.108 15.3122 15.065C17.7462 14.783 20.0002 13.947 20.0002 9.77401C20.0002 8.97401 19.7682 8.20301 19.3292 7.54701C18.9282 6.94901 18.7822 6.22001 18.9162 5.49401C19.0042 5.02101 18.9992 4.54001 18.9042 4.07501C18.5002 4.19501 17.8082 4.48001 16.8112 5.17401C16.5662 5.34401 16.2552 5.39501 15.9692 5.31501C14.1652 4.80801 12.2582 4.80801 10.4532 5.31501C10.1662 5.39501 9.85719 5.34401 9.61219 5.17401C8.62519 4.48701 7.93719 4.20101 7.51719 4.08301C7.42319 4.54401 7.41919 5.02101 7.50619 5.49101C7.63919 6.21301 7.48819 6.95001 7.08019 7.56801C6.64619 8.22701 6.41919 8.99701 6.42319 9.79701C6.42319 13.691 8.30219 14.73 11.1232 15.093C11.4952 15.141 11.8092 15.393 11.9372 15.746C12.0642 16.099 11.9832 16.493 11.7272 16.767C11.3402 17.182 11.1412 17.753 11.1802 18.334L11.1812 19.122C11.1832 19.162 11.1832 19.202 11.1812 19.242L11.1822 21C11.1822 21.553 10.7352 22 10.1822 22C9.63019 22 9.18219 21.553 9.18219 21V20.429C6.49719 20.779 4.96719 19.34 3.90619 18.34C3.46619 17.927 3.05219 17.536 2.74919 17.457C2.21419 17.318 1.89319 16.772 2.03219 16.238C2.17119 15.704 2.71719 15.378 3.25119 15.521C4.05019 15.729 4.64619 16.29 5.27719 16.884C6.29919 17.847 7.26919 18.759 9.18219 18.404V18.401C9.14519 17.872 9.22419 17.33 9.40719 16.817C7.35319 16.305 4.42319 14.812 4.42319 9.80201C4.41719 8.61001 4.75919 7.45601 5.41019 6.46701C5.53219 6.28201 5.57819 6.06501 5.53919 5.85401C5.33919 4.77101 5.45419 3.65901 5.87419 2.64301C5.98819 2.36701 6.21919 2.15601 6.50419 2.06801C6.83519 1.96601 8.05519 1.77101 10.3662 3.27101C12.2372 2.82201 14.1862 2.82201 16.0562 3.27101C18.3682 1.77101 19.5872 1.96501 19.9182 2.06801C20.2032 2.15601 20.4342 2.36701 20.5482 2.64301C20.9692 3.66101 21.0842 4.77201 20.8832 5.85801C20.8442 6.06701 20.8832 6.27201 20.9912 6.43501C21.6512 7.42201 22.0002 8.57601 22.0002 9.77401C22.0002 14.838 19.0772 16.313 17.0202 16.807C17.2042 17.336 17.2812 17.905 17.2372 18.478L17.2402 21C17.2402 21.553 16.7922 22 16.2402 22Z"/></mask><g mask="url(#Github-omask0)"><g id="Github-o&#Github-o240;&#Github-o159;&#Github-o142;&#Github-o168; Color"><rect id="Github-oBase" width="24" height="24"/></g></g></g></g>,
    })
))