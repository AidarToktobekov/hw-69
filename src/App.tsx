import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = ()=> {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={(
            <></>
          )}/>
          <Route path="/show/:id" element={(
            <></>
          )}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
