const axios = require('axios');
// const proxy = require('./proxy.js');
const express = require('express');
const path = require('path');
const cors = require('cors');
const parser = require('body-parser');

const proxy = express();

proxy.use(parser.json());
proxy.use(parser.urlencoded({ extended: true }));
proxy.use(cors());
proxy.use(express.static(path.join(__dirname, '../public')));

module.exports = proxy;
const port = 9000;

// proxy.get('', (req, res) => {
//   const { restaurantId } = req.params;
//   axios.get('')
//     .then(({ data }) => { res.send(data); })
//     .catch((err) => { console.error(err); });
// });



proxy.listen(port, () => console.log(`proxy server running on port ${port}`));