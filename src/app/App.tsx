import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './providers/with-store';
import { router } from './providers/with-router';

import { GlobalStyle } from '../styles/GlobalStyles';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <RouterProvider router={router} />
  </Provider>
);

export default App;
