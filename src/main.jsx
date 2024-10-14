import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD
=======
import store from './Store.jsx'
import { Provider } from 'react-redux'
>>>>>>> 9e461b3 (Added redux project)
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>,
=======
    <Provider store={store}>
    <App />
    </Provider> 
  </StrictMode>
>>>>>>> 9e461b3 (Added redux project)
)
