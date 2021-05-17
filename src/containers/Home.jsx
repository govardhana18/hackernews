import { WelcomeAlert } from "../components/WelcomeAlert";
import { Heading } from '../components/Heading';
import { StoriesList } from './StoriesList';

export const Home = () => {
    return (
        <main role="main">

            <WelcomeAlert/>
            <div className="container">
                <Heading heading="Top stories"/>
                <StoriesList/>
                <div style={{marginBottom: 100}}></div>
            </div>
        </main>
    )
}