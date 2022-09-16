const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();
const Twitter = require("twitter");
const axios = require("axios");
const OAuth = require('oauth-1.0a');

const consumer_key = 'DKspd9AQjezhVSIMLG37m0AkJ'
const consumer_secret = '1FZ6hbXNMndihwz07LjR5mWsHobAQKVqWclMp6cvGLT0aRepuu'
const access_token_key = '1063205132542734336-y7injblo3yiRPAhkFWZGxexUOuesG5'
const access_token_secret = 'eVtkWWxjZFWpC76scWprvyfpffn83v4dZtYXSHl1yaMMp'

const client = new Twitter({
    consumer_key: consumer_key,
    consumer_secret: consumer_secret,
    access_token_key: access_token_key,
    access_token_secret: access_token_secret
});

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// app.post("/", (req, res) => {
//     client.get('statuses/user_timeline', req.params, function(error, tweets, response) {
//         if (!error) {
//             res.send({ status: false })
//         } else {
//             res.send({ status: true, tweets: tweets })
//         }
//     });
// })

app.post("/", async (req, res) => {
    try {
        const response = await axios.post("https://api.twitter.com/oauth/request_token?oauth_consumer_key=DKspd9AQjezhVSIMLG37m0AkJ&oauth_version=1.0")
        res.send({ status: true, data: response })
    } catch (error) {
        res.send(error)
    }
})

app.post('/twitter/tweet', async (req, res) => {
    try {
        const oauth = OAuth({
            consumer: {
                key: consumer_key,
                secret: consumer_secret
            },
            signature_method: 'HMAC-SHA1',
            hash_function: (baseString, key) => crypto.createHmac('sha1', key).update(baseString).digest('base64')
        });

        const token = {
            key: '',
            secret: ''
        };

        const authHeader = oauth.toHeader(oauth.authorize({
            url: 'https://api.twitter.com/2/tweets',
            method: 'POST'
        }, token));

        const data = { "text": "Hello world!!" };

        await axios.post('https://api.twitter.com/2/tweets',
            data,
            {
                headers: {
                    Authorization: authHeader["Authorization"],
                    'user-agent': "v2CreateTweetJS",
                    'content-type': "application/json",
                    'accept': "application/json"
                }
            }
        );

        res.status(201).send({ message: "Tweet successful" });
    } catch (error) {
        console.log("error", error)
        res.status(403).send({ message: "Missing, invalid, or expired tokens" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is successfully running on port http://localhost:${PORT}`)
})