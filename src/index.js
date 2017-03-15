import styles from './styles/style.css';
import Nav from './components/Nav';
const newMessage = () => (`<div>hi</div>`);
const app = document.getElementById('app');
app.innerHTML = newMessage(Nav);

if (module.hot) {
    module.hot.accept();
}