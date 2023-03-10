const redis = require("redis");
const axios = require("axios");
require("dotenv").config();
const redisClient = redis.createClient();
(async () => {
  try {
    await redisClient.connect().then(() => {
      console.log("*Connected to redis");
    });
  } catch (err) {
    console.log("error connecting to redis");
  }
})();

const getImages = async (req, res, next) => {
  // Redis setup
  const searchQuery = req.body.reqData;
  const pageNo = req.body.reqPage;
  console.log("Search data:", searchQuery, pageNo);
  const options = {
    method: "GET",
    url: "https://pexelsdimasv1.p.rapidapi.com/v1/search",
    params: {
      query: searchQuery,
      locale: "en-US",
      per_page: "300",
      page: pageNo,
    },
    headers: {
      Authorization: process.env.API_KEY_ID,
      //Authorization: "563492ad6f917000010000010bc59003765749af8c148450380a1309",
      "X-RapidAPI-Key": "c2ad33e329msh5ae5eed64b2c321p1501edjsn57f7ac1ab1f1",
      "X-RapidAPI-Host": "PexelsdimasV1.p.rapidapi.com",
    },
  };

  const CommonKey = `unique-key-${searchQuery}-page-${pageNo}`;

  redisClient
    .get(CommonKey)
    .then((result) => {
      if (result) {
        // Serve from redis
        console.log(`Found in Redis`);
        const resultJSON = JSON.parse(result);
        res.json(resultJSON);
      } else {
        console.log("serve from API...");
        axios
          .request(options)
          .then((response) => {
            const responseJSON = response.data;
            res.json({
              ...responseJSON,
              source: "API",
            });
            return responseJSON;
          })
          .then((response) => {
            redisClient.setEx(
              CommonKey,
              3600,
              JSON.stringify({
                ...response,
                source: "Redis Cache",
              })
            );
          })
          .catch((err) => {
            console.error(err);
          });
      }
    })
    .catch((error) => {
      console.log(error, "error from the server");
    });
};

module.exports.getImages = getImages;
