import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './todoHelpers'

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
    const result = updateTodo(startTodos, updatedTodo)
    expect(result).not.toBe(startTodos)
})

test('removeTodo should remove an item by id', () => {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const targetId = 1
    const expectedTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]

    const result = removeTodo(startTodos, targetId);
    expect(result).toEqual(expectedTodos)
})

test('removeTodo should not mutate the original array', () => {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const targetId = 1
    const expectedTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]

    const result = removeTodo(startTodos, targetId);
    expect(result).not.toBe(expectedTodos)
})

test('filterTodos should return all items for the root route', () => {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: false },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const result = filterTodos(startTodos, '/')
    expect(result).toEqual(startTodos)
})

test('filterTodos should return only completed items for the complete route', ()=> {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: true },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const expectedTodos = [
        { id: 0, name: 'First todo', isCompleted: true }
    ]
    const result = filterTodos(startTodos, '/')
    expect(result).toEqual(startTodos)
})

test('filterTodos should return only completed items for the active route', ()=> {
    const startTodos = [
        { id: 0, name: 'First todo', isCompleted: true },
        { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const expectedTodos = [
         { id: 1, name: 'Second todo', isCompleted: false },
        { id: 2, name: 'This our new todo', isCompleted: false }
    ]
    const result = filterTodos(startTodos, '/')
    expect(result).toEqual(startTodos)
})