
import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <div className='dashboard'>
        <Header />
        <div className='content'>
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App
