- [ ] Why would you use class component over function components (removing hooks from the question)?

If you don't have hooks, then the reason to use class components over function components is to create stateful components. Class components have lifecycle methods and the ability to manipulate state of individual components.

- [ ] Name three lifecycle methods and their purposes.

componentDidMount: Runs when the component mounts. Good place to put side effects, like fetching data from API or setting event listeners. 

componentDidUpdate: Runs every time the component updates. After mounting, the component will spend most of its life updating as a result of state or prop changes. If you want something to happen when state or props change, put it in here.

componentDidUnmount: Runs when the component is being removed from the DOM. cdU is used to clean up side effects from cDM.

- [ ] What is the purpose of a custom hook?

Custom hooks allow us to reuse logic involving hooks, and let us combine hooks into more powerful or specialized hooks that can be used anywhere in our app.

- [ ] Why is it important to test our apps?

Testing allows us to make sure that our apps our functioning as intended. Testing helps us find bugs, and if we need to refactor our code, it helps us make sure that our new implementation still fulfills the requirements.
