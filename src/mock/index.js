import { createServer } from 'miragejs';

import data from './data.json';

import _ from 'lodash'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data;
    })

    this.get('/posts/:id', (schema, request) => {
      let id = request.params.id
      return _.find(data.posts, {id:id})
    })
  },
});
