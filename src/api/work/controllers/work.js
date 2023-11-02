"use strict";

/**
 *  work controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::work.work", ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.db.query("api::work.work").findOne({
      where: { slug },
    });

    const sanitizedEntity = await this.sanitizeOutput(entity);

    return this.transformResponse(sanitizedEntity);
  },
}));
