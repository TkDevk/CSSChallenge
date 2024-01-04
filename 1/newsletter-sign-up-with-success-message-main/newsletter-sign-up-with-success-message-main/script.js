const sendForm = ()=>{
    const showForm = document.getElementById('showMsg');
    const mainMsg = document.getElementById('mainMsg');
    if(showForm.style.display==='none'){
        showForm.style.display='flex'
        mainMsg.style.display='none'
    }else{
        showForm.style.display='none';
        mainMsg.style.display==='none'
    }

}

const showAgain=()=>{
    const showForm = document.getElementById('showMsg');
    const mainMsg = document.getElementById('mainMsg');
    if(showForm==='flex' ){
        showForm.style.display='none'
        mainMsg.style.display='flex'

    }else{
        showForm.style.display='none';
        mainMsg.style.display='flex'
    }
}

