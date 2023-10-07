const orders = [
    {
        orderId: 0,
        orderStatus: "confirmed",
        orderTime: "06-10-23",
        orderDescription: "2xFocac 3xHambu",
        orderTotal: 1600,
        username: "Kvothe",
        address: "Santa Rosa 631",
        paymentMethod: "Efectivo",
        details: [
            {
                productId: 0,
                quantity: 2,
                subtotal: 1000
            },
            {
                productId: 1,
                quantity: 3,
                subtotal: 600
            }
        ]
    },
    {
        orderId: 0,
        orderStatus: "confirmed",
        orderTime: "07-10-23",
        orderDescription: "1xFocac 1xSandw",
        orderTotal: 1500,
        username: "kvothe",
        address: "Viedma 123",
        paymentMethod: "Efectivo",
        details: [
            {
                productId: 0,
                quantity: 1,
                subtotal: 500
            },
            {
                productId: 2,
                quantity: 1,
                subtotal: 1000
            }
        ]
    }
]

export default orders