
const { Product, Order, User, Category } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find();
    },
    products: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Product.find(params);
    },
    product: async (parent, { _id }) => {
      return await Product.findById(_id);
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }
    },
    users: async () => {
      return await User.find();
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id);

        return user.orders.id(_id);
      }

    }
  },
  };

module.exports = resolvers;