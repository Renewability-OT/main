export function ClassNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
}