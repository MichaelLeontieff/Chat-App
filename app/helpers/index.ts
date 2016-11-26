const router = require("express").Router();

// iterate through the routes object and mount the routes
let _registerRoutes = (routes, method: string) => {
  for (let key in routes) {
    if (typeof routes[key] === "object" &&
          routes[key] !== null) {
            _registerRoutes(routes[key], key);
    } else {
      // Register the routes
      if (method === "get") {
        router.get(key, routes[key]);
      }
      else if (method === "post") {
        router.post(key, routes[key]);
      } else { // NA in routes object
        router.use(routes[key]);
      }
    }
  }
};

let route = (routes) => {
  _registerRoutes(routes, null);
  return router;
};


module.exports = {
  route: route
};
