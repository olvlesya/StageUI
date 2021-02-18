/** @jsx jsx */
import { jsx } from '@emotion/react'
import { Flexbox } from '@stage-ui/core'
import moment from 'moment'
import React, { Fragment } from 'react'
import CalendarTypes from './types'

const DateGridMonth = (props: CalendarTypes.DateGridCalendarProps) => {
    const { value: self, active, onClick, minValue, maxValue } = props

    const isDisabled =
        minValue.valueOf() > self.valueOf() ||
        maxValue.valueOf() < self.valueOf() ||
        false

    const now = moment()
    const monthValue = self.clone().startOf('month').valueOf()
    const nowValue = now.clone().startOf('month').valueOf()
    const activeValue = active.clone().startOf('month').valueOf()

    const isActive = (activeValue === monthValue)
    const isCurrent = (monthValue === nowValue)

    const css = props.styles.day({isActive, isCurrent, isDisabled, isCurrentMonth: true})

    /**
     * Custom render
     */
    if (props.onMonthRender) {
        return (
            <Fragment
                children={
                    props.onMonthRender({ now, self, active, isActive, isCurrent, isDisabled, onClick })
                }
            />
        )
    }
    
    return (
        <Flexbox
            justifyContent="center"
            alignItems="center"
            onClick={() => {
                if (!isDisabled && onClick) {
                    onClick()
                }
            }}
            css={css}
            style={props.style}
            children={self.format('MMMM')}
        />

    )
}

export default DateGridMonth