import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import models from '../../../models/index.js';
import Quote from '../../types/quote.js';

export default {
  // GraphQL 中可以用 object 的方式來定義一個新的 type，例如這邊的 Quote 就是一個新的 type
  type: Quote,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt)
    },
    quote: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve (source, args) {
    return models.quote
      .findById(args.id)
      .then((quote) => {
        return quote.update({ quote: args.quote });
      });
  }
};
