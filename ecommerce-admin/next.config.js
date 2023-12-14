/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGODB_URI: 'mongodb+srv://usename:password@cluster0.lujhkmj.mongodb.net/?retryWrites=true&w=majority',
    GOOGLE_ID: '794340205891-lnik4lr1kcnk6ov3ofh3s553v4dkrq26.apps.googleusercontent.com',
    GOOGLE_SECRET: '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',
    S3_ACCESS_KEY: 'AKIAY2SEWYAESK6ZZAGF',
    S3_SECRET_ACCESS_KEY: '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',
  },
}

module.exports = nextConfig
