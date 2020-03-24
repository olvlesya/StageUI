import WhaleTypes from '@flow-ui/whale/types'

declare namespace DropTypes {
    interface TargetCoordinates {
        top: number
        bottom: number
        left: number
        right: number
    }

    interface Props extends
        WhaleTypes.AttributeProps,
        WhaleTypes.AllEventProps<HTMLDivElement>,
        WhaleTypes.CoreProps<Styles>,
        WhaleTypes.ColorProps,
        WhaleTypes.BorderProps,
        WhaleTypes.PaddingProps,
        WhaleTypes.LayoutProps {
        /**
         * Ref of the target element near which the drop will be shown
         */
        target?: any
        /**
         * Will mount or unmount Drop
         * @default true
         */
        visible?: boolean
        /**
         * The side of the target element on which the drop will be shown
         */
        align?: 'top' | 'bottom' | 'left' | 'right'
        /**
         * Side drop positioning
         */
        justify?: 'start' | 'center' | 'end' | 'start-outside' | 'end-outside'
        /**
         * Stretch drop by target width
         */
        stretchWidth?: boolean
        /**
         * Stretch drop by target height
         */
        stretchHeight?: boolean
        /**
         * Place drop under coursor
         */
        followCursor?: boolean
        /**
         * Distance between target and drop
         */
        spacing?: number
        /**
         * Fired when mouse clicks outside drop
         */
        onClickOutside?: (event: MouseEvent, outsideTarget?: boolean) => void
        /**
         * Fired when user press esc
         */
        onEsc?: () => void
        /**
         * Drop's content
         */
        children?: React.ReactNode
    }

    interface Ref extends Partial<HTMLDivElement> {
        /**
         * Update position of drop (useful when target changes origins and sizes)
         */
        updatePosition: () => void
        /**
         * Change visible state of drop
         */
        setVisible: (state: boolean) => void
    }

    interface Styles {
        /**
         * Root element
         */
        container: void
    }
}

export default DropTypes