import { app } from "./app";

// settings
app.set('port', process.env.PORT || 3000);

// Middlewares

// Starting the serve
app.listen(app.get('port'), () => {
  console.log(`Application is running on port ${app.get('port')}`);
});