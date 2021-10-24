import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import setupApolloClient from "okanemochi/apollo";
import { useQuery } from 'glimmer-apollo';
import { GET_PORTFOLIOS, GetPortfoliosQuery, GetPortfoliosQueryVariables } from 'okanemochi/queries/portfolios';


interface PortfolioListArgs {}

export default class PortfolioList extends Component<PortfolioListArgs> {

  constructor(owner: object, args: any) {
    super(owner, args);
    setupApolloClient(this)
  }

  @tracked
  portfolioName = "";

  /**
   * Using @tracked properties, don't need any other annotating here
   */
  get portfolioNameFilter() {
    if (this.portfolioName?.length) {
      return this.portfolioName
    }
    return null
  }

  /**
   * @tracked works on the query object too
   */
  get portfolioCount() {
    return this.portfolios.data?.portfolios.length || 0
  }

  portfolios = useQuery<GetPortfoliosQuery, GetPortfoliosQueryVariables>(this, () => [
    GET_PORTFOLIOS,
    {
      variables: {
        name: this.portfolioNameFilter
      }
    }
  ]);

}
