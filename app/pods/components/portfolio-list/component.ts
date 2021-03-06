import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { useQuery } from 'glimmer-apollo';
import { GET_PORTFOLIOS } from 'okanemochi/queries/portfolios';
import { GQLQuery, QueryToPortfoliosArgs} from "okanemochi/graphql/schemas";

interface PortfolioListArgs {}

export default class PortfolioList extends Component<PortfolioListArgs> {

  @tracked
  portfolioName = "";

  /**
   * Using @tracked properties, don't need any other annotating here
   */
  get portfolioNameFilter() {
    if (this.portfolioName?.length) {
      return this.portfolioName
    }
    return undefined;
  }

  /**
   * @tracked works on the query object too
   */
  get portfolioCount() {
    return this.portfolios.data?.portfolios?.length || 0
  }

  portfolios = useQuery<GQLQuery, QueryToPortfoliosArgs>(this, () => [
    GET_PORTFOLIOS,
    {
      variables: {
        name: this.portfolioNameFilter
      }
    }
  ]);

}
