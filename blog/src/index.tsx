import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Layout from './component/layout/Layout';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { defaultTheme } from './style/theme';
import zhCN from './i18n/zh_CN.json';
import { IntlProvider } from 'react-intl';

const root = (
  <MuiThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <IntlProvider locale="zh" messages={zhCN as Record<string, string>}>
      <Layout />
    </IntlProvider>
  </MuiThemeProvider>
);

ReactDOM.render(root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
