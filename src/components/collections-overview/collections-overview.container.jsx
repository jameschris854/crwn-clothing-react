import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { slectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import withSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: slectIsCollectionFetching,
});

//compose lets u chain multiple functions mostly HOC
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  withSpinner
)(CollectionsOverview);

// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   withSpinner(CollectionsOverview)
// );

export default CollectionsOverviewContainer;
