/**
The MIT License (MIT)
*/
import{ Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <path fillRule="evenodd" clipRule="evenodd" d="M13.9034 22C13.6894 22 13.4774 21.932 13.3004 21.797L9.27438 18.752C9.02438 18.563 8.87738 18.268 8.87738 17.955V14.681L4.11138 5.459C3.95138 5.149 3.96438 4.778 4.14638 4.48C4.32738 4.182 4.65138 4 5.00038 4H19.0004C19.3524 4 19.6784 4.185 19.8594 4.488C20.0394 4.79 20.0474 5.166 19.8804 5.475L14.9034 14.69V21C14.9034 21.379 14.6884 21.726 14.3484 21.896C14.2074 21.965 14.0554 22 13.9034 22Z"/>,
        outline: <path fillRule="evenodd" clipRule="evenodd" d="M10.877 17.457L12.903 18.99V14.437C12.903 14.271 12.945 14.108 13.023 13.962L17.323 6H6.64298L10.765 13.978C10.839 14.12 10.877 14.278 10.877 14.437V17.457ZM13.903 22C13.69 22 13.477 21.932 13.3 21.797L9.27398 18.752C9.02398 18.563 8.87698 18.268 8.87698 17.955V14.681L4.11198 5.459C3.95098 5.149 3.96398 4.778 4.14598 4.48C4.32698 4.182 4.65098 4 4.99998 4H19C19.352 4 19.678 4.185 19.859 4.488C20.039 4.79 20.047 5.165 19.88 5.475L14.903 14.69V21C14.903 21.379 14.689 21.726 14.349 21.895C14.208 21.965 14.055 22 13.903 22Z"/>,
    })
))