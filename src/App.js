import { Route, Switch } from 'react-router-dom';
import { Home } from './containers/Home';
import { Details } from './containers/Details';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
	return (
		<>
			<Header/>
			<Switch>
				<Route path="/storyDetails/:id" component={Details}/>
				<Route path="/" component={Home}/>
			</Switch>
			<Footer/>
		</>
	);
}

export default App;
