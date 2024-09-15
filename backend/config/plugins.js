module.exports = ({ env }) => ({
  io: {
    enabled: true,
    config: {
      // the article content type will only emit create actions
      contentTypes: ["api::product.product"],
      events: [
        {
          name: "connection",
          handler: ({ strapi }, socket) => {
            // will log every time a client connects
            strapi.log.info(
              `[io] a new client with id ${socket.id} has connected`
            );
          },
        },
        {
          name: "custom-event-name",
          handler({ strapi, io }, socket, x, y) {
            // will log whenever 'custom-event-name' is called by a socket
            strapi.log.info(`[io] hello from custom event location ${x} ${y}`);
          },
        },
      ],
    },
    socket: {
      serverOptions: {
        cors: { origin: "*", methods: ["*"] },
      },
    },
  },
});
