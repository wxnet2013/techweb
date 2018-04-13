import React from 'react';
import {
  Link,
  Route,
} from 'react-router-dom';
import { find } from 'lodash-es';

const data = [
  { id: 1, name: 'book a' },
  { id: 2, name: 'book b' },
  { id: 3, name: 'book c' },
];

// eslint-disable-next-line
const Book = ({ match }) => {
  const item = find(data, (v) => {
    return v.id == match.params.id;
  });
  return (
    <div>book: {item.name}</div>
  );
};

// eslint-disable-next-line
const Books = ({ match }) => {
  
  // const macthUrl = props.match.url;
  const BookLists = data.map((v) => {
    return (<li key={v.id}><Link to={`${match.url}/${v.id}`}>{v.name}</Link></li>);
  })

  return (
    <div>
    <ul>
      {BookLists}
    </ul>

    <div>
      <h3>book detail</h3>
      <Route exact path={`${match.url}/:id`} component={Book} />
    </div>
    </div>
  );
}

export default Books;
