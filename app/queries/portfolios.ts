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
