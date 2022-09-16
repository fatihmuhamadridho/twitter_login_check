const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const app = express();
const Twitter = require("twitter");

const client = new Twitter({
    consumer_key: 'DKspd9AQjezhVSIMLG37m0AkJ',
    consumer_secret: '1FZ6hbXNMndihwz07LjR5mWsHobAQKVqWclMp6cvGLT0aRepuu',
    access_token_key: '1063205132542734336-y7injblo3yiRPAhkFWZGxexUOuesG5',
    access_token_secret: 'eVtkWWxjZFWpC76scWprvyfpffn83v4dZtYXSHl1yaMMp'
});

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    client.get('statuses/user_timeline', req.params, function(error, tweets, response) {
        if (!error) {
            res.send({ status: false })
        } else {
            res.send({ status: true, tweets: tweets })
        }
    });
})

app.listen(PORT, () => {
    console.log(`Server is successfully running on port http://localhost:${PORT}`)
})