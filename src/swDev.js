export default function swDev(){ 
    let swUrl=`${process.env.PUBLIC_URL}/SW.JS`
    navigator.serviceWorker.register(swUrl).then((response)=>{ 
        console.warn(response)
    })
}