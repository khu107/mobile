// import { useEffect, useState } from 'react';
// import { uploadImage } from './upload';
// import axios from 'axios';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import './App.css';
import Than from './asset/s.png';

function App() {
  // const [file, setFile] = useState({});
  // const [result, setResult] = useState(null);

  // const handleChange = (e) => {
  //   setFile(e.target.files[0]);
  // };

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
    <div style={{ marginTop: '20px' }}>
      <div className="App">
        <div className="header">
          <img src={Than} alt="rasm" srcset="" />
          <div className="s">회원가입</div>
        </div>
        <div className="title">
          <h2>
            친구들이 알수있도록, <br />
            사진과 이름을 등록해주세요
          </h2>
        </div>
        <div className="avatar">
          <Avatar size={120} icon={<UserOutlined />} />
        </div>
        <div>
          <input type="text" placeholder="이름" />
        </div>
        <div>
          <button>완료하기</button>
        </div>

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

      {result?.map((e, i) => {
        return (
          <div key={i}>
            <img src={e.img} alt="rasm" width={500} />
          </div>
        );
      })} */}
      </div>
    </div>
  );
}

export default App;
