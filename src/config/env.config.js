import "dotenv/config"

export const server = {
    PORT: process.env.PORT,
    SIGNATURE: process.env.SECRETKEY
}
