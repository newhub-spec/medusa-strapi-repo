'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const axios = require('axios');

module.exports = {
  async afterUpdate(result, params, data) {
    await axios.post(`${process.env.MEDUSA_BACKEND_URL || "http://localhost:9000"}/hooks/update-medusa`, {
      type: 'product',
      data: result.result
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
