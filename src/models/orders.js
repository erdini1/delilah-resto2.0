const orders = [
    {
        id: 0,
        orderStatus: "pending",
        orderDate: "06-10-23",
        description: "2xFocac 3xHambu",
        total: 1600,
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
        id: 1,
        orderStatus: "sending",
        orderDate: "07-10-23",
        description: "1xFocac 1xSandw",
        total: 1500,
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