import React,{useState}  from 'react'
import axios from  'axios'


function PhotoUpload() {
  const[file,setFile ] = useState(null);

  const handleFileChange = (e) =>{
    if (e?.target?.files && e.target.files.length > 0) {
        setFile(e.target.flies[0]);
    }
  };
  const handleUpload = async () => {
    if (!file) return;
  // FormData インスタンスを作成
  const formData = new FormData();
 // append メソッドを使ってファイルを追加
  FormData.append('photo',file);

  try {
    const response = await axios.post('/api/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
   });
   
   // アップロード成功時の処理をここに記述
   console.log('Upload success:', response.data);
// Upload success
} catch (error) {
// Handle the upload error
    console.error('Upload error:', error);
  }
};

  return (
    <div>
        {/* input 要素と button 要素にイベントハンドラーを設定 */}
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>アップロード</button>
    </div>
  );
}

export default PhotoUpload
