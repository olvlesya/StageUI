import { jsx } from '@emotion/core'
import useContainer from '@flow-ui/core/misc/hooks/useContainer'
import useStyleProps from '@flow-ui/core/misc/hooks/useStyleProps'
import useStyles from '@flow-ui/core/misc/hooks/useStyles'
import { forwardRef, RefForwardingComponent } from 'react'
import Types from './types'

const Flexbox: RefForwardingComponent<HTMLDivElement, Types.Props> = (props, ref) => {
    const { attributes } = useContainer(props)
    const styleProps = useStyleProps(props)
    const styles = useStyles<Types.Overrides>(props, {
        container: [
            {
                position: 'relative',
                display: props.inline ? 'inline-flex' : 'flex',
                alignItems: props.alignItems,
                alignContent: props.alignContent,
                justifyContent: props.justifyContent,
                justifyItems: props.justifyItems,
                flexDirection: props.column ? 'column' : props.direction,
                flexFlow: props.flow,
                flexWrap: props.wrap,
            },
            styleProps.all,
        ]
    }, 'Flexbox')

    return jsx(
        'div',
        {
            ...attributes,
            ref: ref,
            css: styles.container
        },
        props.children
    )
}

export default forwardRef(Flexbox)