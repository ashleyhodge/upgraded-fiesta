const { Product } = require('../models');

const resolvers = {
  Query: {
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    products: async () => {
      return Product.find()
    }
    }
  };

module.exports = resolvers;