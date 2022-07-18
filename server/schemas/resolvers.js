
const { Product, Order, User } = require('../models');

const resolvers = {
  Query: {
      product: async (parent, { _id }) => {
        return await Product.findById(_id);
      },
      products: async () => {
        return Product.find()
      },
      user: async (parent, args, context) => {
        if(context.user) {
          const user = await User.findById(context.user._id);
          
          user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

          return user;
        }
      },
      order: async (parent, { _id }, context) => {
        if(context.user) {
          const user = await User.findById(context.user._id);

          return user.orders.id(_id);
        }
      }
    }
  };

module.exports = resolvers;