# Redux Thunk

- Introduce redux-thunk
- Practice with action creators
- answer final redux questions
- Discuss more redux design patterns

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

## Thunk
