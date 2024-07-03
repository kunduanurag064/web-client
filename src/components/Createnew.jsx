import React, { useState ,useEffect} from "react";
import Footer from "./Footer";
import axios from 'axios';
import { userAuthentication } from "../user-authorisation";
import './compcss.css';


const Createnew = ()=>{

    const [mytitle,setTitle] = useState('');
    const [myslug,setSlug] = useState('');
    const [mycontent,setContent] = useState(``);
    let isloggedin = false;
    const [image,setImage] = useState("");

    const handleFilechange = (e)=>{
        //console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = ()=>{
            //console.log(reader.result);
            setImage(reader.result);
        }
        reader.onerror = (error)=>{
            console.log("error",error);
        }
    }

    const changeTitle = (e)=>{
        const newTitle = e.target.value;
        setTitle(newTitle);
        setSlug(changeSlug(newTitle));
    }

    const changeSlug = (text)=>{
        return text.toLowerCase()
               .replace(/[^a-z0-9\s-]/g, '') 
               .trim()                       
               .replace(/\s+/g, '-')        
               .replace(/-+/g, '-');
    }
    const changeMyContent = (e)=>{
        setContent(e.target.value)
    }

    const submitContent = async ()=>{
        const userid = localStorage.getItem('objId');
        if(!userid){
            alert('There is an error. Login again!');
            window.location.hreg='/login';
        }
        if(mycontent.length<20) {alert("Min length of content must be 30.");return;}
        if((mytitle.trim()).length<1){alert("Title is Must! Please give suitable Title");return;}
        /* console.log("title = ",myslug,"\n","content = ",mycontent);  */
        setContent("");
        setSlug("");
        setTitle("");

        try {
            const response = await fetch('http://web-server-nu-two.vercel.app//api/user/createpost',{
                method:'POST',
                headers:{
                    'Content-Type':'Application/json'
                },
                body:JSON.stringify({userid,image,myslug,mycontent})
            });
            if(response.ok){
                alert("Post Successfully Created!");
                 window.location.href = "/";
            }
            else{
                alert("oops! There is Server Error. ");
            }

            
        } catch (error) {
            console.log("there may be an error look : ",error);
        }
    }

    return(
        <>
        {  !userAuthentication() ? window.location.href="login" : isloggedin=true  }
        <br/>
        <button className="create-and-publish-post" onClick={submitContent}>Create Post</button>
        <br/>
         <h1>Let's create new Article/Post</h1>

        <div>
            <div className="title-input-create-newpost"> 
                <label htmlFor="Title" style={{fontSize:"25px"}}>Title :<sup style={{color:"Red"}}>*</sup></label><br/>
                <input type="text" value={mytitle} placeholder="enter article title." onChange={changeTitle}/>
                <br/><br/>
                <label htmlFor="Slug" style={{fontSize:"25px"}}>Slug :</label><br/>
                <input type="text" value={myslug} placeholder="slug here." readOnly/>
                <br/><br/>
                <input type="file" accept="image/png , image/jpeg" style={{border:"2px solid black"}} onChange={handleFilechange}/>
                {image==="" ? "" : <img src={image} width={50} height={50}/>}
          </div>
            <h2>&nbsp;&nbsp;My Article:-</h2>
            <center>
            <textarea cols={100} rows={20} placeholder="Start Writing Your Thought here.___-" className="create-new-post-textarea" value={mycontent} onChange={changeMyContent}/>
            </center>
        </div>
         
        <Footer/>
        </>
    )

}

export default Createnew;
