import request from './request';

export const getTabbarInfo = () => {
  return request({
    url: '/menu/',
    method: 'get'
  });
};
