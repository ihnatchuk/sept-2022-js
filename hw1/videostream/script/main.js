navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=>{
        let videoplayer=document.getElementById('videoplayer');
        videoplayer.srcObject=stream;
        videoplayer.play()
    })
