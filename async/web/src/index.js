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

// 非简单请求 Put
request({
  method: 'PUT',
  url: 'http://localhost:3000/api/not-simple',
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

// 非简单请求 自定义请求头
request({
  method: 'PUT',
  url: 'http://localhost:3000/api/not-simple',
  customHeaders: [
    ['X-Custom-Header', 'value'],
  ],
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

// 非简单请求 自定义请求头: Content-Type application/json
request({
  method: 'PUT',
  url: 'http://localhost:3000/api/not-simple',
  customHeaders: [
    ['Content-Type', 'application/json'],
  ],
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

