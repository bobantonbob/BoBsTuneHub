import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
    API_KEY: process.env.API_KEY,
    CHANNEL_ID_YOUTUBE: process.env.CHANNEL_ID_YOUTUBE,
    CHANNEL_ID_YOUTUBE_MUSIC: process.env.CHANNEL_ID_YOUTUBE_MUSIC,

    TIKTOK_CLIENT_KEY: process.env.TIKTOK_CLIENT_KEY,
    TIKTOK_CLIENT_SECRET: process.env.TIKTOK_CLIENT_SECRET,
    TIKTOK_USERNAME: process.env.TIKTOK_USERNAME
};


