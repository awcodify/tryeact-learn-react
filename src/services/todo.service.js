import {getUrl, get, post, put, destroy} from './base.service'

export const loadTodos = () => {
    const url = getUrl('/todos');
    return get(url)
}

export const createTodo = (todo) => {
    const url = getUrl('/todos');
    return post(url, todo)
}

export const saveTodo = (todo) => {
    const url = getUrl(`/todos/${todo.id}`);
    return put(url, todo)
}

export const deleteTodo = (id) => {
    const url = getUrl(`/todos/${id}`);
    return destroy(url, id)
}