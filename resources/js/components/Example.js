import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import '../../css/app.css'
import AllImage from '../components/AllImage/AllImage'
import Inner_Images from '../components/inner_images/Inner_Images'
/*import Table from './Components/Table/Table'
import Create from './Components/Create/Create'
import Edit from './Components/Edit/Edit'
import Sign_Up from './Pages/Sign_Up/Sign_Up'
import Location from './Components/Location/Location'
*/


function Example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Gallery" element={<AllImage />} />
        <Route exact path="/Images" element={<Inner_Images />} />
        {/*<Route exact path="/read" element={<Table />} />
        <Route exact path="/create" element={<Create />} />
        <Route exact path="/edit" element={<Edit />} />
        <Route exact path="/Location" element={<Location />} />
  */}

  </Routes>
    </BrowserRouter>
  );
}

export default Example;

/*function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;*/

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
