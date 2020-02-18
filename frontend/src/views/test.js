import React from "react";
import FormatUrl from "utils/UrlFormatter";
import { ToastsContainer, ToastsStore } from 'react-toasts';

class Test extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    uploadFile = (event) => {
        let formData = new FormData();
        formData.append('file-to-upload', event.target.files[0]);
        let url = FormatUrl(`/upload`)
        fetch(url, {
            method: 'post',
            headers: {
                Accept: 'application/json, text/plain, */*'
              },
              body:formData,
          })
          .then(response => response.json())
          .then(res => {
              if(res.code === 200){
                ToastsStore.success("upload successful", 3000, "toast-box-pink")
              } else {
                ToastsStore.error("upload failed", 3000, "toast-box-pink")
              }
          }).catch(err => {
            ToastsStore.error("Internal server error", 3000, "toast-box-pink")
          })
    }

    render(){
        return (
            <div>
                <input style={{ background:'pink' }} type="file" onChange={this.uploadFile} />
            </div>
        )
    }
}

export default Test;