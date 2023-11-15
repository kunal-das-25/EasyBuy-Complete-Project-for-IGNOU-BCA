import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import useSettings from 'hooks/useSettings';
import { createCustomTheme } from './theme';
import routes from './routes';
import './i18n';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const App = () => {
  const router = createBrowserRouter(routes());
  const { settings } = useSettings();
  const theme = createCustomTheme({
    theme: settings.theme,
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes
  });
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
};

export default App;
