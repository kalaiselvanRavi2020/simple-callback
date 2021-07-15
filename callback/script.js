let url="";

function download(a){
    setTimeout(function(){
        console.log("your image download started....");
        url="https://images.thequint.com/thequint%2F2019-08%2Fc9df8df5-511d-45a7-bb02-fc9d5e3e556e%2FiStock_1015589218.jpg?rect=0%2C0%2C3419%2C1923";
        console.log("your images is downloading");
        a();
        console.log("image downloaded")
    },11000)
    
}

function process(){
    let img= document.createElement('img');
    img.setAttribute("class","imageone")
    img.src = url;
    console.log(url);
    img.alt="no img";
    document.body.append(img);
}

function countdown(){
    let count=document.createElement("span");
    document.body.append(count);
}

let value = 10
setTimeout(()=>{
    document.getElementById('change').innerText = value
    value--;
    setTimeout(()=>{
        document.getElementById('change').innerText = value
        value--;
        setTimeout(()=>{
            document.getElementById('change').innerText = value
            value--;
            setTimeout(()=>{
                document.getElementById('change').innerText = value
                value--;
                setTimeout(()=>{
                    document.getElementById('change').innerText = value
                    value--;
                    setTimeout(()=>{
                        document.getElementById('change').innerText = value
                        value--;
                        setTimeout(()=>{
                            document.getElementById('change').innerText = value
                            value--;
                            setTimeout(()=>{
                                document.getElementById('change').innerText = value
                                value--;
                                setTimeout(()=>{
                                    document.getElementById('change').innerText = value
                                    value--;
                                    setTimeout(()=>{
                                        document.getElementById('change').innerText = value
                                        value--;
                                        setTimeout(()=>{
                                            document.getElementById('change').innerText = 'Happy Independence Day'
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
download(process);