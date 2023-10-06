const orders = [
    {
        orderId: 0,
        orderStatus: "new",
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
    }
]

export default orders