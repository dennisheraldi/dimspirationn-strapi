module.exports = ({ env }) => ({
  // ...
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        work: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  // ...
});
