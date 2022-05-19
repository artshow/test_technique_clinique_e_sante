import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './styles/index.css';

// -> Importations des composants
import Header from './components/header';
// -> Importation des différentes vues
import SearchView from './views/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
		<Header />
    	<SearchView />
  	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
