module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"), // You'll set this later
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["key1", "key2"]),
  },
});
