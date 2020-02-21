import { Block, Button, Checkbox, Divider, Flexbox, Meter, Radio, Range, Switch, TextField, useTheme } from '@flow-ui/core'
import { Cube, Email, PaperPlane, People, Settings } from '@flow-ui/core/icons'
import { useEffect, useState } from 'react'

let promoData = {
    iconCount: 1,
    buttonText: 'Submit',
    shape: 'rounded',
    buttonDecoration: 'filled',
    emailText: '',
    emailIcon: false,
    switchOn: false,
    radioOn: false,
    checkOn: false,
    meterPercent: 20,
    c1: 'transparent',
    c2: 'transparent',
    c3: 'transparent',
    c4: 'transparent',
    t: 1000
}

export default () => {

    const theme = useTheme()
    const [pd, setPd] = useState(promoData)

    useEffect(() => {
        let nextStep = 0
        const steps = [
            {
                t: 50,
                meterPercent: 30,
                c1: theme.color.lightest,
                c2: theme.color.lightest,
                c3: theme.color.lightest,
                c4: theme.color.lightest,
                shape: 'rounded',
                radioOn: true,
                buttonDecoration: 'filled',
            },
            { t: 250, iconCount: 2 },
            { t: 250, iconCount: 3, meterPercent: 10 },
            { t: 250, iconCount: 4, checkOn: false, emailIcon: false, c1: theme.color.primary, },
            { t: 250, emailText: 'E', switchOn: true, radioOn: false, },
            {
                t: 250,
                emailText: 'E-',
                c2: theme.color.primary,
                c1: theme.color.lightest
            },
            { t: 250, emailText: 'E-Ma', meterPercent: 40, radioOn: true, },
            { t: 250, emailText: 'E-Mai', checkOn: true },
            {
                t: 250,
                emailText: 'E-Mail',
                c3: theme.color.primary,
                c2: theme.color.lightest,
                switchOn: false,
                meterPercent: 30,
                buttonText: 'S',
                buttonDecoration: 'outline',
            },
            {
                t: 250,
                buttonText: 'Su',
                emailIcon: true,
                meterPercent: 70,
                shape: 'round',
            },
            { t: 250, buttonText: 'Sub', meterPercent: 90 },
            {
                t: 250,
                buttonText: 'Subm',
                buttonDecoration: 'text',
                meterPercent: 70,
                radioOn: false,
                c4: theme.color.primary,
                c3: theme.color.lightest,
            },
            { t: 250, buttonText: 'Submi', meterPercent: 50 },
            { t: 500, buttonText: 'Submit', switchOn: false, shape: 'square', }
        ]
        const next = () => {
            promoData = {
                ...promoData,
                ...steps[nextStep]
            } as any
            setPd(promoData)
            const { t } = steps[nextStep]
            nextStep = nextStep + 1 === steps.length ? 0 : nextStep + 1
            setTimeout(() => {
                next()
            }, t)
        }
        next()
    }, [])

    return (
        <Block w="20rem" my="2rem" overflow="hidden">
            <Block>
                <Flexbox justifyContent="space-around" pb="1rem">
                    {pd.iconCount > 0 && <People size="2rem" color={pd.c1} />}
                    {pd.iconCount > 1 && <Cube size="2rem" color={pd.c2} />}
                    {pd.iconCount > 2 && <PaperPlane size="2rem" color={pd.c3} />}
                    {pd.iconCount > 3 && <Settings size="2rem" color={pd.c4} />}
                </Flexbox>
                <Range css={{ '>div': { transition: 'all .1s' } }} value={pd.meterPercent} />
                <Flexbox justifyContent="space-around" py="1rem">
                    <Switch checked={pd.switchOn} />
                    <Radio checked={pd.radioOn} />
                    <Checkbox checked={pd.checkOn} />
                </Flexbox>
                <Meter css={{ '>div': { transition: 'all .1s' } }} percent={100 - pd.meterPercent} />
                <Divider my="1rem" />
                <TextField
                    shape={pd.shape as any}
                    leftChild={pd.emailIcon ? <Email /> : undefined}
                    placeholder={pd.emailText}
                />
                <Flexbox justifyContent="center" pt="1rem">
                    <Button
                        decoration={pd.buttonDecoration as any}
                        shape={pd.shape as any}
                        flex={1}
                        children={pd.buttonText}
                    />
                </Flexbox>
            </Block>
        </Block>
    )
}