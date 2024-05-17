// import { IgApiClient } from '../src';
const { IgApiClient } = require('instagram-private-api');
require("dotenv").config();
const { readFile } = require('fs');
const { DateTime, Duration } = require('luxon');

// const { StickerBuilder } = require ('./src/sticker-builder');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);

const ig = new IgApiClient();

async function login() {
  ig.state.generateDevice(process.env.IG_USERNAME);
//   ig.state.proxyUrl = process.env.IG_PROXY;
  await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);
}

const postStoryToInsta = async () => {
// (async () => {
  await login();
  const path = './psychopath.jpg';
  const file = await readFileAsync(path);

  /**
   *  You can move and rotate stickers by using one of these methods:
   *  center()
   *  rotateDeg(180) rotates 180°
   *  scale(0.5) scales the sticker to 1/2 of it's size
   *  moveForward() moves the sticker in front
   *  moveBackwards() moves the sticker in the background
   *  right() aligns the sticker to the right
   *  left() aligns the sticker to the left
   *  top() aligns the sticker to the top
   *  bottom() aligns the sticker to the bottom
   *
   *  All of these are chainable e.g.:
   *  StickerBuilder.hashtag({ tagName: 'tag' }).scale(0.5).rotateDeg(90).center().left()
   *  You can also set the position and size like this:
   *  StickerBuilder.hashtag({
   *     tagName: 'insta',
   *     width: 0.5,
   *     height: 0.5,
   *     x: 0.5,
   *     y: 0.5,
   *   })
   */

  // these stickers are 'invisible' and not 're-rendered' in the app
  await ig.publish.story({
    file,
    // // this creates a new config
    // stickerConfig: new StickerBuilder()
    //   // these are all supported stickers
    //   .add(
    //     StickerBuilder.hashtag({
    //       tagName: 'insta',
    //     }).center(),
    //   )
    //   .add(
    //     StickerBuilder.mention({
    //       userId: ig.state.cookieUserId,
    //     }).center(),
    //   )
    //   .add(
    //     StickerBuilder.question({
    //       question: 'My Question',
    //     }).scale(0.5),
    //   )
    //   .add(
    //     StickerBuilder.question({
    //       question: 'Music?',
    //       questionType: 'music',
    //     }),
    //   )
    //   .add(
    //     StickerBuilder.countdown({
    //       text: 'My Countdown',
    //       // @ts-ignore
    //       endTs: DateTime.local().plus(Duration.fromObject({ hours: 1 })), // countdown finishes in 1h
    //     }),
    //   )
    //   .add(
    //     StickerBuilder.chat({
    //       text: 'Chat name',
    //     }),
    //   )
    //   .add(
    //     StickerBuilder.location({
    //       locationId: (await ig.locationSearch.index(13, 37)).venues[0].external_id,
    //     }),
    //   )
    //   .add(
    //     StickerBuilder.poll({
    //       question: 'Question',
    //       tallies: [{ text: 'Left' }, { text: 'Right' }],
    //     }),
    //   )
    //   .add(
    //     StickerBuilder.quiz({
    //       question: 'Question',
    //       options: ['0', '1', '2', '3'],
    //       correctAnswer: 1,
    //     }),
    //   )
    //   .add(
    //     StickerBuilder.slider({
    //       question: 'Question',
    //       emoji: '❤',
    //     }),
    //   )

    //   // mention the first story item
    //   .add(StickerBuilder.mentionReel((await ig.feed.userStory('username').items())[0]).center())

    //   // mention the first media on your timeline
    //   .add(StickerBuilder.attachmentFromMedia((await ig.feed.timeline().items())[0]).center())

    //   // you can also set different values for the position and dimensions
    //   .add(
    //     StickerBuilder.hashtag({
    //       tagName: 'insta',
    //       width: 0.5,
    //       height: 0.5,
    //       x: 0.5,
    //       y: 0.5,
    //     }),
    //   )
    //   .build(),
  });
}



// -----------------------------------------------------------
// require("dotenv").config();

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 4000;

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

// const { IgApiClient } = require('instagram-private-api');
// const { get } = require('request-promise');
// // const CronJob = require("cron").CronJob;

// const postToInsta = async () => {
//     const ig = new IgApiClient();
//     ig.state.generateDevice(process.env.IG_USERNAME); // generates android device that logs in
//     await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

//     const imageBuffer = await get({ // get a file hosted somewhere, we can also do this with image on the device
//         url: 'https://cdn.mos.cms.futurecdn.net/W2mCnMepPxv4fb3Aq3ps5f-1200-80.jpg', // need to fix png, not uploading
//         encoding: null, 
//     });

//     await ig.publish.photo({
//         file: imageBuffer,
//         caption: 'Till all are one because they are',
//     });
// }

// const cronInsta = new CronJob("30 5 * * *", async () => {
    console.log('before, May 9th, 1659 hours, 2024')
    // postToInsta();
    postStoryToInsta();
    console.log('after')

// });

// cronInsta.start();