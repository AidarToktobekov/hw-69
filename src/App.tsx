import Layout from "./components/Layout/Layout"
import FindShow from "./containers/Shows/FindShow";
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

const App=()=> {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={(
            <></>
          )}/>
          <Route path="/show/:id" element={(
            <FindShow></FindShow>
          )}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
