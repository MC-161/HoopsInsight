import bodyParser from 'body-parser';
import routes from './routes/index.js';
import createServer from './server.js';

const app = createServer();

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

// Middleware to handle routes
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});