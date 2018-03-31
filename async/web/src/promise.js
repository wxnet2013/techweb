import { request } from './cors';
// promise 状态变化
// pending -> resolved
// pending -> rejected
// todo

// 基本方法
// Promise next Promise.all Promise.resolve Promise.reject
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    return resolve({});
  }, 2000);
});

p.then(v => {
  // alert(v);
});

const p2 = Promise.resolve({});
// const p3 = Promise.reject({});

// 实现接口串行请求
// todo
Promise.resolve({ baseUrl: 'http://localhost:3000' })
  .then(conf => {
    return new Promise((resolve, reject) => {
      request({
        url: `${conf.baseUrl}/api/api1`,
        withCredentials: false,
        onLoad: xhr => {
          var text = xhr.responseText;
          // console.log(text);
          resolve(text);
        },
        onTimeout: event => {
          alert('timeout');
        },
        onError: () => {
          reject('error');
        },
      });
    });
  })
  .then(v => {
    // console.log(v);
    return new Promise((resolve, reject) => {
      request({
        url: 'http://localhost:3000/api/api2?param=${v}',
        withCredentials: false,
        onLoad: xhr => {
          var text = xhr.responseText;
          // console.log(text);
          resolve(text);
        },
        onTimeout: event => {
          alert('timeout');
        },
        onError: () => {
          alert('error');
        },
      });
    });
  })
  .then(v => {
    console.log(v);
  })
  .catch(msg => {
    console.log(msg);
  });

// 实现接口的并行请求
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
  arg => {
    console.log(arg);
  }
);
