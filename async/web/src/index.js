import { request } from './cors';

request({
  url: 'http://localhost:3000/api/simple',
  withCredentials: false,
  onLoad: (xhr) => {
    var text = xhr.responseText;
    console.log(text);
  },
  onTimeout: (event) => {
    alert('timeout');
　},
  onError: () => {
    alert('error');
  },
});

request({
  url: 'http://localhost:3000/api/simple',
  withCredentials: false,
  onLoad: (xhr) => {
    var text = xhr.responseText;
    console.log(text);
  },
  onTimeout: (event) => {
    alert('timeout');
　},
  onError: () => {
    alert('error');
  },
});

// 详细资料
// http://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html
// http://www.ruanyifeng.com/blog/2016/04/cors.html
// https://www.html5rocks.com/en/tutorials/cors/