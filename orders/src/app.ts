import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';

import cookieSession from 'cookie-session';
import {
    NotFoundError,
    currentUser,
    errorHandler
} from '@learning-tickets/common';
import { indexOrderRouter } from './routes';
import { showOrderRouter } from './routes/show';
import { deleteOrderRouter } from './routes/delete';
import { newOrderRouter } from './routes/new';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
    cookieSession({
        signed: false,
        secure: process.env.NODE_ENV !== 'test'
    })
);

app.use(currentUser);

app.use(indexOrderRouter);
app.use(showOrderRouter);
app.use(deleteOrderRouter);
app.use(newOrderRouter);

app.all('*', async (req, res, next) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
