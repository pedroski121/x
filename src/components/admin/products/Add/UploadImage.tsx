import { CldUploadWidget, CldUploadWidgetPropsOptions } from 'next-cloudinary';



const UploadImage = ({appendToImgURLs}:{appendToImgURLs(url:string):void}) =>{

  const cloudUploadWidgetOptions:CldUploadWidgetPropsOptions = {
    maxFiles:3,
    multiple:true,
    defaultSource:"local",
    sources:["camera","local", "url"],
  }
    const uploadSuccess = (result:any) => { appendToImgURLs(result["info"]["url"])
    }

    return (
<CldUploadWidget uploadPreset={`${process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}`} options={cloudUploadWidgetOptions}
onUpload={uploadSuccess} >
  {({ open }) => {
    function handleOnClick(e:any) {
      e.preventDefault();
      open();
    }
    return (
      <button className="btn btn-outline-dark rounded-0" onClick={handleOnClick}>
        Upload Image
      </button>
    );
  }}
</CldUploadWidget>
    )
}

export {UploadImage}