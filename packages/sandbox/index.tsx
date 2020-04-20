import { Grid, Viewport, TextField, Button, Select, ScrollView, Table } from '@stage-ui/core'
import React, { useState, RefForwardingComponent } from 'react'
import ReactDOM from 'react-dom'
import Code from '@stage-ui/core/icons/svg/code'
import dt from '@stage-ui/docs/utils/types'
import Themer from '@stage-ui/docs/components/Themer'

//@ts-ignore
window.dt = dt
const Playground = () => {
	const [value, setValue] = useState('')
	return (
		<Viewport theme="dark">
			<Themer />
		</Viewport>
	)
}

ReactDOM.render(
	<Playground />,
	document.getElementById('app')
)