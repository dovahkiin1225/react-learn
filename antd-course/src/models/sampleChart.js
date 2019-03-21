import * as sampleChartService from '../service/sampleChart';

export default {

  namespace: 'sampleChart',

  state: {
    cardsList: [],
    statistic: {},
  },

  effects: {
    *queryList({ _ }, { call, put }) {
      const rsp = yield call(sampleChartService.queryList);
      console.log('queryList');
      console.log(rsp);
      yield put({ type: 'saveList', payload: { cardsList: rsp.result } });
    },
    // *getStatistic({ payload }, { call, put }) {
    //   const rsp = yield call(cardsService.getStatistic, payload);
    //   yield put({
    //     type: 'saveStatistic',
    //     payload: {
    //       id: payload,
    //       data: rsp.result,
    //     },
    //   });
    //   return rsp;
    // },
  },

  reducers: {
    saveList(state, { payload: { cardsList } }) {
      return {
        ...state,
        cardsList,
      }
    },
    saveStatistic(state, { payload: { id, data } }) {
      return {
        ...state,
        statistic: {
          ...state.statistic,
          [id]: data,
        },
      }
    },
  },
};
