function getContentType(url){
    if(url.endsWith('css')){
        return 'text/css';
    }else if(url.endsWith('html')){
        return 'text/html';
    }else if(url.endsWith('png')){
        return 'text/png';
    }else if(url.endsWith('js')){
        return 'text/js';
    }
}

// module.exports = (req,res)=>{
//     if(req.url.startsWith('/content') && req.method ==='GET'){

//     }
// }