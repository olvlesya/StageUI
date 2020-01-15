import { ArchitectTools } from '@flow-ui/architect/types'
import * as Core from '@flow-ui/core'
import { uuid } from '.'

const Init = (component: string, props = {}) => ({
    component: Core[component],
    create: () => ({
        id: uuid(),
        $: {},
        props: {},
        component
    })
})

const components: ArchitectTools['components'] = {
    Divider: Init('Divider'),
    // Icon: Init('Icon'),
    Spinner: Init('Spinner'),
    Header: Init('Header', {
        text: 'Header',
    }),
    // Display: Init('Display', {
    //     text: 'Display',
    // }),
    // Paragraph: Init('Paragraph', {
    //     text: 'Paragraph',
    // }),
    Text: Init('Text', {
        text: 'Text',
    }),
    // Anchor: Init('Anchor', {
    //     text: 'Anchor',
    // }),
    /**
     * Control
     */
    Button: Init('Button', {
        text: 'Button',
    }),
    Checkbox: Init('Checkbox'),
    // DatePicker: Init('DatePicker'),
    // Menu: Init('Menu'),
    Radio: Init('Radio'),
    Range: Init('Range'),
    Select: Init('Select'),
    Switch: Init('Switch'),
    TextField: Init('TextField'),
    /**
     * Data
     */
    // Meter: Init('Meter'),
    // Table: Init('Table'),
    /**
     * Layout
     */
    Badge: Init('Badge', {
        children: [],
        props: {
            label: '10'
        }
    }),
    Block: Init('Block', {
        children: []
    }),
    // Drop: Init('Drop', {
    //     children: []
    // }),
    Flexbox: Init('Flexbox', {
        children: []
    }),
    // Grid: Init('Grid', {
    //     children: []
    // }),
    // Tree: Init('Tree', {
    //     children: []
    // }),
}

export default components