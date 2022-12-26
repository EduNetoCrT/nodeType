import express, { request, response } from 'express';
import routers from './routes';


const app = express();


app.use('/api', routers)




app.listen(3232, () => {
  console.log('Server running in 3232')
})