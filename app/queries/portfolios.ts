import { gql } from 'glimmer-apollo';

export const GET_PORTFOLIOS = gql`
    query portfolios($name: String) {
        portfolios(name: $name) {
            id
            name
            baseIncome
        }
    }
`;


export type GetPortfoliosQuery = {
    __typename?: 'Query';
    portfolios: {
        __typename?: 'Portfolio';
        id: string;
        name: string;
        baseIncome: number;
    }[];
};

export type GetPortfoliosQueryVariables = {
    name?: string | null
};