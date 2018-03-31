import { request } from "./cors";
// import './promise';
import "./async";

request({
  url: "http://localhost:3000/api/api1",
  withCredentials: false,
  onLoad(xhr) {
    const text = xhr.responseText;
    console.log(text);

    request({
      url: `http://localhost:3000/api/api2?param=${text}`,
      withCredentials: false,
      onLoad(xhr) {
        const text = xhr.responseText;
        console.log(text);
      },
      onTimeout() {
        alert("timeout");
      },
      onError() {
        alert("error");
      }
    });
  },
  onTimeout: event => {
    alert("timeout");
  },
  onError: () => {
    alert("error");
  }
});

request({
  url: "http://localhost:3000/api/simple",
  withCredentials: false,
  onLoad: xhr => {
    var text = xhr.responseText;
    console.log(text);
  },
  onTimeout: event => {
    alert("timeout");
  },
  onError: () => {
    alert("error");
  }
});

// 非简单请求 Put
request({
  method: "PUT",
  url: "http://localhost:3000/api/not-simple",
  withCredentials: false,
  onLoad: xhr => {
    var text = xhr.responseText;
    console.log(text);
  },
  onTimeout: event => {
    alert("timeout");
  },
  onError: () => {
    alert("error");
  }
});

// 非简单请求 自定义请求头
request({
  method: "PUT",
  url: "http://localhost:3000/api/not-simple",
  customHeaders: [["X-token", "token"]],
  withCredentials: false,
  onLoad: xhr => {
    var text = xhr.responseText;
    console.log(text);
  },
  onTimeout: event => {
    alert("timeout");
  },
  onError: () => {
    alert("error");
  }
});

// // 非简单请求 自定义请求头: Content-Type application/json
request({
  method: "PUT",
  url: "http://localhost:3000/api/not-simple",
  customHeaders: [["Content-Type", "application/json"]],
  withCredentials: false,
  onLoad: xhr => {
    var text = xhr.responseText;
    console.log(text);
  },
  onTimeout: event => {
    alert("timeout");
  },
  onError: () => {
    alert("error");
  }
});
