'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Photos', [
      {
        itemId: 1,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/tent/tent.jpeg'
      },
      {
        itemId: 2,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike-pump/bike-pump.jpeg'
      },
      {
        itemId: 3,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/umbrella-hat/umbrella-hat.jpg'
      },
      {
        itemId: 3,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/umbrella-hat/umbrella-hat1.jpeg'
      },
      {
        itemId: 4,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/dumbell/dumbell.jpg'
      },
      {
        itemId: 4,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/dumbell/dumbell2.jpeg'
      },
      {
        itemId: 4,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/dumbell/dumbell3.jpeg'
      },
      {
        itemId: 5,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/grappling-hook/grappling-hook-batman.jpg'
      },
      {
        itemId: 5,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/grappling-hook/grappling-hook.jpeg'
      },
      {
        itemId: 5,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/grappling-hook/grappling-hook1.jpeg'
      },
      {
        itemId: 6,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/snow-launcher/snow-launcher.jpg'
      },
      {
        itemId: 6,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/snow-launcher/snow-launcher2.jpg'
      },
      {
        itemId: 7,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/sports-shirt/shirt.jpeg'
      },
      {
        itemId: 7,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/sports-shirt/sports-shirt2.jpeg'
      },
      {
        itemId: 7,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/sports-shirt/sports-shirt3.png'
      },
      {
        itemId: 8,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Backpack/backpack-2.jpeg'
      },
      {
        itemId: 8,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Backpack/Osprey-backpack.jpg'
      },
      {
        itemId: 9,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/racquetball/racquetball.jpeg'
      },
      {
        itemId: 9,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/racquetball/racquetball2.jpeg'
      },
      {
        itemId: 9,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/racquetball/racquetball3.jpeg'
      },
      {
        itemId: 10,
        url: 'https://images.asics.com/is/image/asics/1012A592_002_SR_RT_GLB-1?$sfcc-product$'
      },
      {
        itemId: 10,
        url: 'https://www.cnet.com/a/img/VKmy0taw5V9f5iwiDsYgCVa5AS0=/940x528/2020/11/06/c2991e77-c9ab-433a-b73d-98be38b30421/mizuno.jpg'
      },
      {
        itemId: 10,
        url: 'https://images.asics.com/is/image/asics/1012A592_002_SR_RT_GLB-1?$sfcc-product$'
      },
      {
        itemId: 10,
        url: 'https://images.asics.com/is/image/asics/1012A592_002_SR_RT_GLB-1?$sfcc-product$'
      },
      {
        itemId: 11,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/baseball-glove/baseball-glove1.jpeg'
      },
      {
        itemId: 11,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/baseball-glove/baseball-glove2.jpeg'
      },
      {
        itemId: 12,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/worms/worms1.jpeg'
      },
      {
        itemId: 12,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/worms/worms3.jpeg'
      },
      {
        itemId: 13,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/1.jpg'
      },
      {
        itemId: 13,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/2.jpg'
      },
      {
        itemId: 13,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/3.jpg'
      },
      {
        itemId: 13,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/Product1/4.jpg'
      },
      {
        itemId: 14,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots2/IMG_3843.jpg'
      },
      {
        itemId: 14,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots2/IMG_3845.jpg'
      },
      {
        itemId: 14,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots2/IMG_3846.jpg'
      },
      {
        itemId: 14,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots2/IMG_3848.jpg'
      },
      {
        itemId: 14,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots2/IMG_3849.jpg'
      },
      {
        itemId: 15,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots-red/IMG_4171.jpg'
      },
      {
        itemId: 15,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots-red/IMG_4172.jpg'
      },
      {
        itemId: 15,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots-red/IMG_4173.jpg'
      },
      {
        itemId: 15,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots-red/IMG_4174.jpg'
      },
      {
        itemId: 15,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/boots-red/IMG_4175.jpg'
      },
      {
        itemId: 16,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/baseball-hat/baseball-hat.jpeg'
      },
      {
        itemId: 16,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/baseball-hat/baseball-hat1.jpeg'
      },
      {
        itemId: 16,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/baseball-hat/baseball-hat2.jpeg'
      },
      {
        itemId: 16,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/baseball-hat/baseball-hat3.jpeg'
      },
      {
        itemId: 17,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/t-shirt/shirt1.jpg'
      },
      {
        itemId: 17,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/t-shirt/shirt2.jpeg'
      },
      {
        itemId: 18,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/camp-chairs/camp-chair1.jpeg'
      },
      {
        itemId: 18,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/camp-chairs/camp-chair2.jpeg'
      },
      {
        itemId: 19,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/flintnsteel/flintnsteel1.jpeg'
      },
      {
        itemId: 19,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/flintnsteel/flintnsteel2.jpeg'
      },
      {
        itemId: 20,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/waterpurifier/waterpurifier1.jpg'
      },
      {
        itemId: 20,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/waterpurifier/waterpurifier2.jpeg'
      },
      {
        itemId: 20,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/waterpurifier/waterpurifier3.jpeg'
      },
      {
        itemId: 21,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bugspray/bugspray1.jpeg'
      },
      {
        itemId: 21,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bugspray/bugspray2.jpeg'
      },
      {
        itemId: 21,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bugspray/bugspray3.jpeg'
      },
      {
        itemId: 22,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/utinsels/utinsels1.jpeg'
      },
      {
        itemId: 22,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/utinsels/utinsels2.jpeg'
      },
      {
        itemId: 22,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/utinsels/utinsels3.jpeg'
      },
      {
        itemId: 22,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/utinsels/utinsels4.jpeg'
      },
      {
        itemId: 22,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/utinsels/utinsels5.jpeg'
      },
      {
        itemId: 23,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/bikelight/bikelight1.jpeg'
      },
      {
        itemId: 23,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/bikelight/bikelight2.jpeg'
      },
      {
        itemId: 24,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/bikeseat/bikeseat1.jpeg'
      },
      {
        itemId: 24,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/bikeseat/bikeseat2.jpeg'
      },
      {
        itemId: 25,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/elbowpads/elbowpads1.jpeg'
      },
      {
        itemId: 25,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/elbowpads/elbowpads2.jpeg'
      },
      {
        itemId: 25,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/elbowpads/elbowpads3.jpeg'
      },
      {
        itemId: 26,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/helmet/helmet1.jpeg'
      },
      {
        itemId: 26,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/helmet/helmet2.jpeg'
      },
      {
        itemId: 26,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/helmet/helmet3.jpeg'
      },
      {
        itemId: 27,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/shorts/shorts1.jpeg'
      },
      {
        itemId: 28,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/waterbottle/waterbottle1.jpeg'
      },
      {
        itemId: 28,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/waterbottle/waterbottle2.png'
      },
      {
        itemId: 28,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/bike/waterbottle/waterbottle3.jpeg'
      },
      {
        itemId: 29,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/socks/socks1.jpeg'
      },
      {
        itemId: 29,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/socks/socks2.png'
      },
      {
        itemId: 29,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/socks/socks3.jpeg'
      },
      {
        itemId: 30,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/heartmonitor/heartmonitor1.jpeg'
      },
      {
        itemId: 31,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/shoes/runningshoes1.jpg'
      },
      {
        itemId: 31,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/shoes/runningshoes2.jpeg'
      },
      {
        itemId: 31,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/shoes/runningshoes3.jpeg'
      },
      {
        itemId: 32,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/sleeves/sleeves1.jpeg'
      },
      {
        itemId: 33,
        url: 'https://gear-again.s3-us-west-1.amazonaws.com/Products/running/waterbottle/watterbottle1.jpeg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Photos', null, {});
  }
};
