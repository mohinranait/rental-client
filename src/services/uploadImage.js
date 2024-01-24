import { publicInstance } from "../hooks/useAxiosPublic";

export const uploadMultipleImage = async (selectedFiles) => {
    console.log(selectedFiles);
    let imgArr=[]
    const formData = new FormData();
    for (const file of selectedFiles) {
        formData.append('image', file);
        const {data} = await publicInstance.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API}`, formData)
        imgArr.push(data.data.display_url)
        console.log(data.data.display_url);
    }
    console.log(imgArr);
    return imgArr
}

export const singleImage = async (image) => {
    const formImage = new FormData()
    formImage.append('image', image)
    const {data} = await publicInstance.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_BB_API}`, formImage)
    return data.data.display_url;
}