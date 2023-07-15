import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from Dalle" });
});

router.route('/').post(async (req, res) => {
    try {
        const {prompt} = req.body;

        console.log('Request body:', req.body);

        // const response = await openai.Image.create({
        //     prompt,
        //     n: 1,
        //     size: '1024x1024',
        //     response_format: 'b64_json'
        // });
        const response = await openai.createImage({
            prompt: "a white siamese cat",
            n: 1,
            size: "1024x1024",
          });
          image_url = response.data.data[0].url;

        console.log("response ", response);

        // const image = response.data.data[0].b64_json;

        res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Oops! Something went wrong!" });
    }
})

export default router;