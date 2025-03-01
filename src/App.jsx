import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ReasonSec from "./components/sections/reason";
import TravelSec from "./components/sections/travelJournal";
import { ninjaTurtles } from "./challange/QuizOne";

function App() {
    function Main() {
        return (
            <>
                <main className="main grow">
                    {/* <ReasonSec /> */}
                    <TravelSec />
                    {ninjaTurtles}
                </main>
            </>
        );
    }

    return (
        <>
            <div className="wrapper min-h-screen flex flex-col justify-between overflow-hidden">
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default App;
