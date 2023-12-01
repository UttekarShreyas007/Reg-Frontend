const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user');
const config = require("./config");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ limit: '10mb' }));

console.log(process.env.MONGODB_URI, 'aefafaf');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server connected to port ${PORT}`);
});
