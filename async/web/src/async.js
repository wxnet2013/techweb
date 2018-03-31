import axios from 'axios';

// 与 Promise 的关系
async function fn() {
  return 1;
}

fn().then(() => {
  console.log('ddddd');
});

const apiList = Promise.resolve({
  list: [{}],
});

const apiList2 = Promise.resolve({
  list: [{}],
});

async function getList() {
  const list = await apiList;
  const list2 = await apiList2;
  // return [ ...list.list, ...list2.list ]
  // const a = await Promise.all([apiList, apiList2]);
  // alert(a);
  const response = await axios.get('http://localhost:3000/api/api1');
  console.log(response.data);
}

getList().then(list => {
  console.log(list);
});
