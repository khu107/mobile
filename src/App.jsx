import { useEffect, useState } from 'react';
// import { uploadImage } from './upload';
// import axios from 'axios';
import { useRecoilState } from 'recoil';

import './App.css';
import { themeState } from './recoil/recoilState';
import Header from './pages/Header';
import Side from './pages/Side';
import List from './pages/List';
import Footer from './pages/Footer';

function App() {
  // const [file, setFile] = useState({});
  // const [result, setResult] = useState(null);
  // const [theme, setTheme] = useRecoilState(themeState);
  // const handleChange = (e) => {
  //   setFile(e.target.files[0]);
  // };
  // const toggleTheme = () => {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme); // 테마 기호를 로컬 스토리지에 저장
  // };
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   }
  // }, []);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   uploadImage(file).then((url) => {
  //     const config = {
  //       img: url,
  //     };
  //     axios.post('http://localhost:4000/users', config);
  //     setResult([...result, config]);
  //   });
  // };

  // useEffect(() => {
  //   axios.get('http://localhost:4000/users').then((res) => {
  //     setResult(res.data);
  //   });
  // }, []);

  return (
    // className={`App ${theme}`}
    <div className="App">
      <Header />
      <Side />
      <List />
      <Footer />

      {/* <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          name="file"
          required
          onChange={handleChange}
        />
        <button type="submit">ok</button>
      </form>
      <button onClick={toggleTheme}>dark</button> */}
    </div>
  );
}

export default App;
