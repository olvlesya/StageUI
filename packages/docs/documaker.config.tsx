import HomePage from './home'
import Architect from '@flow-ui/architect'
import { Config } from '@flow-ui/documaker/core'
import Value from './components/Value'
import Params from './components/Params'
import StyleType from './components/StyleType'
import { ValueDefinition } from '@flow-ui/documaker/components/Page/Types/Interface'
import { Text } from '@flow-ui/core'

const config: Config = {
    name: 'FlowUI',
    git: 'https://github.com/abr-tech/FlowUI',
    pages: {
        order: {
            About: ['Getting started','Theming','Overrides','Props', 'Bundle'],
            Layout: [],
            Content: [],
            Control: [],
            Data: [],
            Icons: [],
            Util: [],
            Lab: []
        },
        types: [
            {
                interface: 'Props',
                columns: [
                    {
                        key: 'name',
                        title: 'Name',
                        width: '10rem'
                    },
                    {
                        key: 'values',
                        title: 'Type',
                        width: '12rem',
                        render: (c) => <Value type={c.row as ValueDefinition}/>
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Text children={(c.row as ValueDefinition).comment?.toString()}/>
                    },
                    {
                        key: 'isOptional',
                        title: 'Parameters',
                        width: '8rem',
                        render: (c) => <Params type={c.row as ValueDefinition}/>
                    },
                    {
                        key: 'tags',
                        title: 'Default',
                        width: '4rem',
                        render: (c) => <Text children={(c.row as ValueDefinition).tags?.default} />
                    }
                ]
            },
            {
                interface: 'Styles',
                columns: [
                    {
                        key: 'name',
                        title: 'Name',
                        width: '10rem'
                    },
                    {
                        key: 'comment',
                        title: 'Description',
                        render: (c) => <Text children={(c.row as ValueDefinition).comment?.toString()}/>
                    },
                    {
                        key: 'values',
                        title: 'States',
                        width: '15rem',
                        render: (c) => <StyleType type={c.row as ValueDefinition}/>
                    },
                ]
            }
        ],
        separatedTypes: [
            'Attributes',
            'Layout',
            'Padding',
            'Margin',
            'Flex',
            'Grid',
            'Color',
            'Border',
            'Event',
        ],
        custom: {
            '/': HomePage,
            '/architect': Architect
        }
    }
}

export default config