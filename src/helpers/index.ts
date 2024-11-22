export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-EU', {style: 'currency', currency: 'EUR'}).format(amount)
}

export function formartDate(dateString: string): string {
    const dateObj = new Date(dateString)
    const options : Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    return new Intl.DateTimeFormat('es-ES', options).format(dateObj)
}