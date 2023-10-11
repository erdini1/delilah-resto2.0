import products from "../models/products.js"

export const formatDate = () => {
    const options = {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }
    return new Date().toLocaleDateString('es-ES', options)
}

export const descriptionOrder = (details) => {
    let description = ""
    details.map(element => {
        const product = products.find(product => product.id === element.productId)
        description += `${element.quantity}x${product.name.slice(0, 5)} `
    })
    return description
}

export const totalOrder = (details) => {
    let total = 0
    details.map(element => {
        const product = products.find(product => product.id === element.productId)
        total += product.price * element.quantity
    })
    return total
}

export const subtotalOrder = (productId, quantity) => {
    let subtotal = 0
    const product = element => element.id === productId
    subtotal = product.price * quantity
    return subtotal
}