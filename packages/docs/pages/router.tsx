import SystemTypes from '@stage-ui/system/types'
import { Text } from '@stage-ui/core'
import React, { useState, Fragment } from 'react'
import Page from '../components/Page'
import Page404 from './404'
import core from '../utils/core'

interface RouterProps {
    theme: SystemTypes.Theme
    defaultThemes: Record<string, SystemTypes.Theme>
    setTheme: React.Dispatch<React.SetStateAction<SystemTypes.Theme>>
}

core.init()

const Router = (props: RouterProps) => {

    const { config, pages } = core
    const { defaultThemes, theme, setTheme } = props
    const themes = Object.assign(defaultThemes, config.themes)

    const [path, setPath] = useState<string>('/' + window.location.pathname.split('/').filter(i => i).join('/'))

    const page = core.getPageByUrl(path)
    const CustomPage = config.pages?.custom?.[path] || null
    const noPages = Object.keys(pages).length === 0

    document.title = page?.title
        ? config.name
            ? page.title + ' - ' + config.name
            : page.title
        : config.name || 'Docs'

    window.onpopstate = (e: PopStateEvent) => setPath(e.state.path)

    function historyPush(path: string) {
        history.pushState({ path }, '', path)
        setPath(path)
    }

    return (
        <Fragment>
            {page &&
                <Page
                    data={page}
                    pages={pages}
                    config={config}
                    path={path}
                    setPath={historyPush}
                    theme={theme}
                    themes={themes}
                    setTheme={setTheme}
                />
            }
            {CustomPage && !page &&
                <CustomPage
                    pages={pages}
                    config={config}
                    path={path}
                    setPath={historyPush}
                    theme={theme}
                    themes={themes}
                    setTheme={setTheme}
                />
            }
            {!CustomPage && !page && !noPages &&
                <Page404 />
            }
            {!CustomPage && !page && noPages &&
                <Text>Docs has no pages</Text>
            }
        </Fragment>
    )
}

export default Router