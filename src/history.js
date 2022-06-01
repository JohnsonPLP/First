import { createBrowserHistory, createMemoryHistory } from 'history';

export default (indexPage, historyType) => {
  let historyObj = createMemoryHistory;
  if (historyType === 'browser') {
    historyObj = createBrowserHistory;
  }

  return historyObj({
    initialEntries: [indexPage],
    initialIndex: 1,
  });
};
