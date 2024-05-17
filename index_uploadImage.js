require("dotenv").config();

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000;

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

const { IgApiClient } = require('instagram-private-api');
const { get } = require('request-promise');
// const CronJob = require("cron").CronJob;

const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME); // generates android device that logs in
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    const imageBuffer = await get({ // get a file hosted somewhere, we can also dothis with image on the device
        url: 'https://cdn.mos.cms.futurecdn.net/W2mCnMepPxv4fb3Aq3ps5f-1200-80.jpg', // need to fix png, not uploading
        encoding: null, 
    });

    await ig.publish.photo({
        file: imageBuffer,
        caption: 'Till all are one because they are',
    });
}

// const cronInsta = new CronJob("30 5 * * *", async () => {
    console.log('before, May 9th, 1659 hours, 2024')
    postToInsta();
    console.log('after')

// });

// cronInsta.start();