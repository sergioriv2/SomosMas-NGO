// Express
const express = require("express");

// Middlewares
const cors = require("cors");
const morgan = require("morgan");
const fileUpload = require("express-fileupload");

// Endpoints routes
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const newsRouter = require("./routes/news");
const contactsRouter = require("./routes/contacts");
const activitiesRouter = require("./routes/activities");
const organizationsRouter = require("./routes/organizations");
const testimoniesRouter = require("./routes/testimonies");
const categoriesRouter = require("./routes/categories");
const membersRouter = require("./routes/members");
const uploadRouter = require("./routes/uploads");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.SERVER_PORT;
    this.endpoints = {
      users: "/users",
      auth: "/auth",
      news: "/news",
      organizations: "/organizations",
      contacts: "/contacts",
      activities: "/activities",
      testimonies: "/testimonies",
      categories: "/categories",
      upload: "/upload",
      members: "/members",
    };

    this.middlewares();
    this.routes();
  }

  middlewares() {
    // CORS Middleware
    this.app.use(cors());

    // File express middleware
    this.app.use(
      fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
      })
    );

    // Morgan logger for development
    this.app.use(morgan("dev"));

    // JSON Writing and reading middleware
    this.app.use(express.json());

    this.app.use(
      express.urlencoded({
        extended: false,
      })
    );
  }

  routes() {
    this.app.use(this.endpoints.users, usersRouter);
    this.app.use(this.endpoints.auth, authRouter);
    this.app.use(this.endpoints.news, newsRouter);
    this.app.use(this.endpoints.organizations, organizationsRouter);
    this.app.use(this.endpoints.contacts, contactsRouter);
    this.app.use(this.endpoints.activities, activitiesRouter);
    this.app.use(this.endpoints.testimonies, testimoniesRouter);
    this.app.use(this.endpoints.categories, categoriesRouter);
    this.app.use(this.endpoints.members, membersRouter);
    this.app.use(this.endpoints.upload, uploadRouter);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Application on port " + this.port);
    });
  }
}

module.exports = Server;
