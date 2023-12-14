/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    MONGODB_URI: 'mongodb+srv://username:password@cluster0.lujhkmj.mongodb.net/?retryWrites=true&w=majority',
    GOOGLE_ID: '794340205891-lnik4lr1kcnk6ov3ofh3s553v4dkrq26.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    STRIPE_PK: 'pk_test_51MxJ2XBNuSxHXHzCRJIpjF4qwCnVCKByJE6VANIeX3JTJRkjpBqghRqYz5X1D71jiAE4b7tv4NZJPq9ezYFETx2c00wRVOYE2L',
    STRIPE_SK: 'sk_test_51MxJ2XBNuSxHXHzCF20NEpMqQwvwjhpZb8TxE9w7UQLhFgvWnmmNOwrX7Ij8kNC7AfzR9Z7ukTOlnzRHqpuP1avw006V6rAl28',
    PUBLIC_URL: 'http://localhost:3001',
    FEATURED_PRODUCT_ID: '643b2bef29db0a19c0359068',
    FEATURED_PRODUCT_IMAGE: 'https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png',
  },
}

module.exports = nextConfig
