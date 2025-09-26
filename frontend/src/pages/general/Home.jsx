import { useEffect, useState } from "react";
import axios  from "axios";



const Home = () => {
    const [videos, setVideos] = useState([])
    // Autoplay behaviout is handled inside ReelFeed

    useEffect ( () => {
        axios.get("https://localhost:3000/api/food", {withCredentials: true})
            .then (response => {

                console.log(response.data);

                setVideos(response.data.foodItems);
            })
            .catch( () => { /*noop: optinally handle error */})
    },[])

    // Using local refs within ReelFeed; keeping map here for dependency parity if needed

    async function likeVideo(item) {
        
        const response = await axios.post("http://localhost:3000/api/food/like", {foodId: item._id}, {withCredentials: true})

        if(response.data.like) {
            console.log("Video liked");
            setVideos((prev) => prev.map( (v) => v._id === item._id ? {...v, likeCount: v.likeCount + 1} :v))
        } else {
            console.log("Video unliked");
            setVideos( (prev) => prev.map((v) => v._id === item._id ? {...v, likeCount: v.likeCount - 1}: v))
        }
    }

    async function saveVideo(item) {
        const response = await axios.post("http://localhost:3000/api/food/save", { foodId: item._id}, {withCredentials: true})

        if (response.data.save) {
            setVideos((prev) => prev.map( (v) => v._id === item._id ? {...v,savesCount: v.savesCount + 1}: v))
        } else {
            console.log("video unliked");
            setVideos( (prev) => prev.map ( (v) => v._id === item._id ? {...v, savesCount: v.saveCount - 1}: v))
        } 
    }

    return (
        <ReelFeed 
            items = {videos}
            onLIke = {likeVideo}
            onSave = {saveVideo}
            emptyMessage = "No videos available"
        />
    )
}
 
export default  Home