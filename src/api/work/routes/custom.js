module.exports = {
  routes: [
    {
      method: "GET",
      path: "/works/:slug",
      handler: "work.findOne",
      config: {
        auth: false,
      },
    },
  ],
};
