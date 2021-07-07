import React, { useState } from 'react'
import { UploadOutlined } from '@ant-design/icons'
import { Upload, Button, Form } from 'antd'
const RegisterComponent = () => {
    const [seletedFile, setSeletedFile] = useState("")
    return (
        <form className="flex-column-center">
            <img className="picture" style={{ height: "150px", margin: "10px" }} src={seletedFile || './images/default.jpg'} alt="profile picture"></img>
            <input type="file" style={{ display: "flex", justifyContent: "center" }} value={seletedFile}></input>
            <input type="text" placeholder="firstname"></input>
            <input type="text" placeholder="lastname"></input>
            <input type="email" placeholder="account@domain.ext"></input>
            <input type="password" placeholder="*********"></input>
            <button type="submit" style={{ alignSelf: 'flex-end', color: "black" }}>Submit</button>
            <button type="submit" style={{ alignSelf: 'flex-end', color: "black" }}>Reset</button>
        </form>
    )
}

export default RegisterComponent
