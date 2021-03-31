const express = require('express');
const connectDB = require('./config/db');
const app = express();

connectDB();

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send("Server is running"));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/recordings', require('./routes/api/recordings'));

const PORT = process.env.PORT || 5010;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
