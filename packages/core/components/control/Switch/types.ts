import CheckTypes from '../../basic/Check/types'

declare namespace SwitchTypes {
  interface Props extends CheckTypes.Props<HTMLDivElement, Classes> {}

  type Classes = {
    /**
     * Switch container
     */
    check: {
      checked: Props['checked']
      size: Props['size']
      disabled: Props['disabled']
    }
    /**
     * Icon of Switch
     */
    switch: {
      checked: Props['checked']
      size: Props['size']
      disabled: Props['disabled']
    }
  }
}

export default SwitchTypes
