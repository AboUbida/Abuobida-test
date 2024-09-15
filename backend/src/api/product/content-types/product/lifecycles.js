// src/api/product/content-types/product/lifecycles.js

module.exports = {
  async afterUpdate(event) {
    const { result } = event; // result contains the updated product
    // Emit event to notify all connected clients about the product update
    strapi.$io.raw({ event: "update:product", data: result });
  },
};
