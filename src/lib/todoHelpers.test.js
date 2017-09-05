import {addTodo} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false }
    ]
    const newTodo = {id:2, name: 'This our new todo', isCompleted: false}
    const expected = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const result = addTodo(startTodos, newTodo)
    expect(result).toEqual(expected)
})
