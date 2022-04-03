import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"


const secret = process.env.NEXT_PUBLIC_HASURA_SECRET !== undefined ? process.env.NEXT_PUBLIC_HASURA_SECRET : "not";

const createHasuraClient = (secret : string) => {

    return new ApolloClient({
        link: new HttpLink({
            uri: "https://untiyroom.hasura.app/v1/graphql",
            headers: {
                "x-hasura-admin-secret": secret
            }
        }),
        cache: new InMemoryCache(),
    })
}

export const hasuraClient = createHasuraClient(secret);