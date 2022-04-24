import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
	apiKey: 'AIzaSyCkjK5xQEDtxDkJ0itut1Hzn-qioyar96g',
	authDomain: 'galushowroom.firebaseapp.com',
	projectId: 'galushowroom',
	storageBucket: 'galushowroom.appspot.com',
	messagingSenderId: '315031106767',
	appId: '1:315031106767:web:cdd8d6ae1be41c150af3ba',
	measurementId: 'G-1Y77LN56DY',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
