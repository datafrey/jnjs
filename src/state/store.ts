import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { ActionType } from './action-types';

export const store = createStore(reducers, {}, applyMiddleware(thunk));

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content: `_Tip: click \`\`\`Format\`\`\` button to make your code prettier (it appears when you hover the code editor area) and use buttons in the top right corner of each cell to control it's position in the cells order._

__Thank you for taking a look at this!__`
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
    content: `import axios from 'axios';
import 'bulma/css/bulma.css';

axios
  .get('http://jsonplaceholder.typicode.com/users/1')
  .then(({ data }) => show(data.name));`
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content: `_Tip: You can resize code cells or their output areas holding their edges._

You can also import almost any __NPM module__ and try it here:`
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
    content: `import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(factorial5);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 5)}>+5</button>
      <button onClick={() => setCount(count - 5)}>-5</button>
    </>
  );
};

show(<App />);`
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content: `_Tip: To add a new cell hover between cells or at the top if there's no cells on the screen and click \`\`\`+ Code\`\`\` or \`\`\`+ Text\`\`\` button._

You can also create and output __React components__ using the same function:`
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'code',
    content: `show('Hello world!');

function factorial(num) {
  return num === 0 ? 1 : num * factorial(num - 1);
}

const factorial5 = factorial(5);

show(factorial5);`
  }
});

store.dispatch({
  type: ActionType.INSERT_CELL_AFTER,
  payload: {
    id: null,
    type: 'text',
    content: `# Here's my jupyter notebooks for JavaScript

Hope you'll enjoy it! For example, you can write markdowns like __this__. To redact it click on it, to see how it looks click anywhere outside it.

Or create a cell with vanilla JS code and see how it works using \`\`\`show()\`\`\`function:`
  }
});
