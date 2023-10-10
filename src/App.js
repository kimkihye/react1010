import { Route, Switch } from "react-router-dom";

//common
import Header from "./components/common/Header";

//main
import Main from "./components/mian/Main";

//sub
import Company from "./components/sub/Company";
import Consulting from "./components/sub/Consulting";
import Location from "./components/sub/Location";

import "./scss/style.scss";

function App() {
	return ( 
		<>
			<Switch>
				<Route exact path="/">
					<Header type={'common'} />
					<Main/>
				</Route>

				<Route path="/">
					<Header type={'sub'} />
				</Route>
			</Switch>
			<Route path="/Company">
				<Company></Company>
			</Route>
			<Route path="/Consulting">
				<Consulting></Consulting>
			</Route>
			<Route path="/Location">
				<Location></Location>
			</Route>
		</>
	);
}

export default App;
