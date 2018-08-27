# Redux Thunk

- Introduce redux-thunk
- Practice with action creators
- answer final redux questions
- Discuss more redux design patterns

## TODO

- select first painting automatically

X change in the reducer
dispatch a new action from a component

- delete a painting

X add an action, filter the painting out of the list (in the reducer)

- filter by gallery

new action
new reducer for filters
filter in the PaintingContainer

## Questions

When to keep state in React components (vs. in Redux)?
- When only the component needs that state

How to change just one element in an array? (good patterns?)
  - (append) [...state, newobject];
  - (remove) state.filter()
...just one key of an object? (without mutating the original)
  - { ...state, newkey: val }

What's an action creator?
  - function that returns an action

- more practice
- lots of pieces working together
- identify - which are the best patterns to use?
- diffuses where the information is kept
  - more files to keep track of
- where do we put database interaction code?

Flux??

## Thunk
