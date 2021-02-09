import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Home from "./home/Home";

export const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#1f2a37',
			light: '#1f2a37',
			dark: '#1f2a37',
    },
    secondary: {
			main: '#56e6ff',
			light: '#56e6ff',
			dark: '#56e6ff',
    }
  },
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiStepIcon: {
        root: {
            color: '#9e9e9e',
            '&$active': {
                color: '#1f2a37',
            },
            '&$completed': {
                color: '#12b981',
            },
        },
    },
}
})

function App() {

  return (
      <MuiThemeProvider theme={customTheme}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    );
}

export default App;
