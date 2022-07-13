const { Product } = require('../models');

const resolvers = {
  product: async (parent, { _id }) => {
    return await Product.findById(_id)
  }
}

module.exports = resolvers;