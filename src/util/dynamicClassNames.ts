export function Dynamic(...classes: string[]): string {
    return classes.filter(Boolean).join(' ')
}