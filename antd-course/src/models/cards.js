import request from '../util/request';
const delay = (millisecond) => {
  return new Promise((resolve) => {
    setTimeout(resolve, millisecond);
  });
};
export default {
  namespace : 'cards',
  state     : {
    cardsList: [],
    statistic: {},
  },
  effects: {
    * queryList(_, sagaEffects) {
    // _    代表事件的Action对象，由于函数体不需要Action内容，所有使用`_`占位符代替Action对象了。
      const listData = [{
        name : 'umi',
        desc : '极快的类 Next.js 的 React 应用框架',
        url  : 'https://umijs.org'
      },
      {
        name : 'antd',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn'
      },
      {
        name : 'antd-pro',
        desc : '一个服务于企业级产品的设计体系',
        url  : 'https://ant.design/index-cn'
      }
      ];
      const { call, put } = sagaEffects;
      yield call(delay, 3000);
      yield put({ type: 'initList', payload: listData });
    }
  },
  reducers: {
    initList(state, {payload}) {
      const cardsList = [...payload];
      return {
        cardsList
      };
    }
  }
};