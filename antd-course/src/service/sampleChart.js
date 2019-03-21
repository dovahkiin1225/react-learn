import request from '../util/request';

export function queryList() {
  return request('/api/sampleChart');
}

export function getStatistic(id) {
  return request(`/api/sampleChart/${id}/statistic`);
}