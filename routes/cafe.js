const express = require('express')
const axios = require('axios')

const router = express.Router()



router.post('/getNearBy', async(req, res) => {
    const data = {
        location: req.body.location
    }
    axios.post('https://cs615-project.herokuapp.com/business/getBusinessByLocation', data)
        .then((response) => {
            return res.send(response.data)
        }).catch((err) => {
            console.error(err);
            return res.send({
                error: err
            })
        });
})






module.exports = router;