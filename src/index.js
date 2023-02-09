import './styles.css'
import {rootReducer} from "./redux/rootReducer";
import {applyMiddleware, legacy_createStore} from "redux";
import {asyncIncrement, decrement, increment} from "./redux/actions";
import thunk from "redux-thunk";


const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')

const store = legacy_createStore(
    rootReducer,
    0,
    applyMiddleware(thunk)
);
window.store = store;

addBtn.addEventListener('click', ()=>{
    store.dispatch(increment())
})
subBtn.addEventListener('click', ()=>{
    store.dispatch(decrement())
})
asyncBtn.addEventListener('click', ()=>{
    store.dispatch(asyncIncrement())
})

store.subscribe(()=>{
    counter.textContent = store.getState().toString();
})

store.dispatch({type: "INIT_APPLICATION"})

themeBtn.addEventListener('click', ()=>{
 // document.body.classList.toggle('dark')
})

