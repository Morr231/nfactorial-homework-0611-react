import "./App.css";

import Navbar from "./navbar/navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="img-container">
                <div className="img-element">
                    <img
                        src="https://source.unsplash.com/gYl-UtwNg_I/1500x1500"
                        alt="first"
                        className="img"
                    />
                    <div className="img-description">Hey</div>
                </div>
                <div className="img-element">
                    <img
                        src="https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"
                        alt="second"
                        className="img"
                    />
                    <div className="img-description">Let's</div>
                </div>
                <div className="img-element">
                    <img
                        src="https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"
                        alt="third"
                        className="img"
                    />
                    <div className="img-description">Give</div>
                </div>
                <div className="img-element">
                    <img
                        src="https://source.unsplash.com/ITjiVXcwVng/1500x1500"
                        alt="fourth"
                        className="img"
                    />
                    <div className="img-description">All</div>
                </div>
                <div className="img-element">
                    <img
                        src="https://source.unsplash.com/3MNzGlQM7qs/1500x1500"
                        alt="fifth"
                        className="img"
                    />
                    <div className="img-description">You can</div>
                </div>
            </div>
        </div>
    );
}

export default App;
