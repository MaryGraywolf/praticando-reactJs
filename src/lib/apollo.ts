import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rbmdwd0v9w01z519l3bqh7/master',
    cache: new InMemoryCache()
})