import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'x-user-id': '1000001',
  },
});

export const getTodos = () => api.get('/todos');

export const createTodo = (title: string) =>
  api.post('/todos', { title });

export const updateTodo = (id: number, payload: any) =>
  api.patch(`/todos/${id}`, payload);
