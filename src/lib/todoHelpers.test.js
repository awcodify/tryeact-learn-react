import {addTodo, findById, toggleTodo, updateTodo} from './todoHelpers'

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

test ('findById should return the expected item from an array', ()=> {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const expected = {id: 1, name: 'Second todo', isCompleted: false}
    const result = findById(1, startTodos)
    expect(result).toEqual(expected)
})

test('toggleTodo should toggle this isCompleted prop of a todo', () => {
    const startTodo = { id: 1, name: 'Second todo', isCompleted: false }
    const expected = { id: 1, name: 'Second todo', isCompleted: true }
    const result = toggleTodo(startTodo)
    expect(result).toEqual(expected)
})

test ('toggleTodo should not mutate the original todo', () => {
    const startTodo = { id: 1, name: 'Second todo', isCompleted: false }
    const result = toggleTodo(startTodo)
    expect(result).not.toBe(startTodo)
})

test('updateTodo should update an item by id', () => {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const updatedTodo = { id: 1, name: 'Second todo', isCompleted: true }
    const expected = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted:true },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]

    const result = updateTodo(startTodos, updatedTodo);
    expect(result).toEqual(expected)
})

test('updateTodo should not mutate the original array', () => {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const updatedTodo = { id: 1, name: 'Second todo', isCompleted: true }
    const result = updateTodo(startTodos, updatedTodo);
    expect(result).not.toBe(startTodos)
})