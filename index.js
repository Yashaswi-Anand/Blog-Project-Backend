const express = require('express');
const PORT = 7000;
const app = express();
const cors = require('cors');
const project_router = require('./routes/project.router');
const user_router = require('./routes/users.router');

app.use(cors(
    {
        origin: '*',
        credentials: true
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/project', project_router);
app.use('/user', user_router);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});