import {Login} from "./Login";
import {Players} from "./Players";
import {VotingSummary} from "./VotingSummary";
import {useSelector} from "react-redux";
import {VotingCards} from "./VotingCards";
import {ResetButton} from "./ResetButton";
import "./App.css";

function App() {
    const username = useSelector(state => state.user.name);
    const isLoggedIn = useSelector(state => state.user.name !== null);

    return (
        <div className="App">
            <div className={"container mx-auto"}>
                <header className={"m-5 text-center"}>
                    <h1 className={"text-xl antialiased"}>Poker Planning — ♠ ♥ ♦ ♣</h1>
                    {isLoggedIn && <p className={"mt-1"}>You are logged in as <i>{username}</i>.</p>}
                </header>

                {!isLoggedIn && <Login/>}
                {isLoggedIn && <Players/>}
                {isLoggedIn && <VotingSummary/>}
                {isLoggedIn && <VotingCards/>}
                {isLoggedIn && <ResetButton/>}
            </div>
        </div>
    );
}

export default App;
