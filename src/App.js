import './App.css';
import plus from "./Add_Plus.svg"

const App = () => {
    return (
        <div className="App">
            <div className="App-header">
                <div className="App-header__title">
                    <h1>To Do App</h1>
                </div>
                <form className="add-todo">
                    <input placeholder="Что будем делать?" type="text"/>
                    <button>
                        <img src={plus} alt=""/>
                    </button>
                </form>
            </div>
            <div className="separator"/>
            <div className="App-todo">
                <ul className="App-todo__list">
                    <li className="App-todo__item item-app-todo">
                        <label>
                            <input type="checkbox" className="checkbox"/>
                                <span className="fake"></span>
                            <div className="item-app-todo__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque enim esse exercitationem facilis illum iusto molestiae nemo, nesciunt nihil quaerat rem reprehenderit voluptatibus? Cupiditate dolorem excepturi minima necessitatibus provident?</div>
                        </label>
                    </li>
                    <li className="App-todo__item item-app-todo">
                        <label>
                            <input type="checkbox" className="checkbox"/>
                                <span className="fake"></span>
                            <div className="item-app-todo__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque enim esse exercitationem facilis illum iusto molestiae nemo, nesciunt nihil quaerat rem reprehenderit voluptatibus? Cupiditate dolorem excepturi minima necessitatibus provident?</div>
                        </label>
                    </li>
                    <li className="App-todo__item item-app-todo">
                        <label>
                            <input type="checkbox" className="checkbox"/>
                                <span className="fake"></span>
                            <div className="item-app-todo__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque enim esse exercitationem facilis illum iusto molestiae nemo, nesciunt nihil quaerat rem reprehenderit voluptatibus? Cupiditate dolorem excepturi minima necessitatibus provident?</div>
                        </label>
                    </li>
                </ul>
            </div>
        </div>);
}

export default App;
