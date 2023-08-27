import {all} from 'redux-saga/effects';
import ExploreSaga from 'ExploreServices/sagas/explore.rootsaga';

function* rootSaga() {
  yield all([ExploreSaga()]);
}

export default rootSaga;
