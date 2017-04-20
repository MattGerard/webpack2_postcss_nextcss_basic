import styles from './styles/style.css';
import Nav from './components/Nav';
import archie from './img/archie_hat.jpg';

const newMessage = () => `<div>hi</div>`;
const app = document.getElementById('app');
app.innerHTML = newMessage(Nav);

if (module.hot) {
  module.hot.accept();
}
