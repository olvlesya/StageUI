export type SpaceProp = Stage.Sizes | (string & { T?: string }) | number

export default (value: string | number, theme: Stage.Theme): string => {
  if (typeof value === 'number') {
    return `${value.toString()}px`
  }

  return value
    .split(' ')
    .map((currentValue: string) => theme.spacing[currentValue as Stage.Sizes] || currentValue)
    .join('')
}
