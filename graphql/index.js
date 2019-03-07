import {
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import queries from './queries';
import mutations from './mutations';

// schema 裡面會有不同的 type
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
});
