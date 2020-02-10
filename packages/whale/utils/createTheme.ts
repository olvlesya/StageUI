import Types from '../types'
import createID from './createID'
import mergeObjects from './mergeObjects'
import Color from 'color'

const createTheme = (theme: Types.SourceTheme): Types.Theme=> {

    const main = convertColors(theme.main)
    const assets = theme.assets(main)
    const overrides = theme.overrides
    const replace = (themeReplace: Types.ReplaceTheme): Types.Theme  => {
        
        const newTheme = mergeObjects(
            theme,
            themeReplace,
        ) as Types.SourceTheme

        newTheme.assets = (theme) => mergeObjects(
            assets,
            themeReplace.assets && themeReplace.assets(theme),
        ) as Types.ThemeAssets

        newTheme.main.name = newTheme.main.name || main.name + '-' + createID()

        return createTheme(newTheme)
    }

    return { ...main, assets, overrides, replace }
}

function convertColors(theme: Types.SourceTheme['main']): Types.Theme {
    return mergeObjects(
        {},
        theme,
        (value) => value instanceof Array
            ? Color(value)
            : value
    ) as Types.Theme
}

export default createTheme