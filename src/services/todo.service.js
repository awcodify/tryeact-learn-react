const baseUrl = 'http://localhost:3131/todos';

export const loadTodos = () => {
    return fetch(baseUrl)
        .then(res => res.json())
}