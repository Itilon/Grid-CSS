const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const init = () => {
    const app = express();

    return Promise.resolve(app);
};

module.exports = { init };