module.exports = {
    schema: [
        {
            'https://untiyroom.hasura.app/v1/graphql': {
                headers: {
                    "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET,
                    'x-hasura-role': 'admin',
                },
            },
        },
    ],
    documents: ['./graphql/**/*.graphql'],
    overwrite: true,
    generates: {
        './graphql/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
            config: {
                skipTypename: false,
                withHooks: true,
                withHOC: false,
                withComponent: false,
            },
        },
        './graphql/graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
};
