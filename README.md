# Redux Warmup Challenge

Fork and clone this repository and run the app. You've been given a codebase with a bunch of functionality already implemented. Your task is as follows:

* Familiarize yourself with the codebase. Follow through the hierarchy of components, follow through the way actions get dispatched in response to events to modify the state. Add console logs, understand the Redux flow.

* There may be things that are new to you, `combineReducers`, a `configureStore` file. There are notes left in the codebase to help guide you here. Do your best to follow what is going on.

* Following the patterns shown, **implement two new features**
  - The delete button currently doesn't do anything. Make it work. Remove the painting from the array of all paitings as well as set the activePaintingId to `null`. Do actions get dispatched to mutiple reducers?
  - The `MuseumPicker` component currently doesn't do anything. How should it change the state so that it filters only the paintings that are in the "National Gallery of Art, Washington D.C."
