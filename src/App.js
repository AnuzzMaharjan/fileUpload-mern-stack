import './App.css';
import FormData from 'form-data';
import Axios from 'axios';
import { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", file);
    Axios.post("/files", formData);
  }
  return (
    <div>
      <input type='file' name='screenshot' onChange={e => setFile(e.target.files[0])} />
      <input type='submit' value='submit' onClick={e => upload(e)} />
    </div>
  );
}

export default App;
