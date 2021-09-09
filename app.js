
       logingbtn = () =>{
        
        const email =document.getElementById('email').value;
       const password = document.getElementById('pasword').value;
    //    const emailerror=document.getElementById('emailerror');
       const modal =document.getElementById('modal');
    //    const loginform =document.getElementById('loginform');

       const emailregux = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       const paswdregux=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

       if(emailregux.test(email) && paswdregux.test(password)){
        modal.innerHTML=`
        <div class="bg-gray-400 rounded shadow pb-3 max-w-xs max-h-full text-center ">
            <div class="mb-4">
                <h1 class="text-2xl capitalize">Welcome!</h1>
                <span class="text-1xl capitalize mt-5 border bg-green-500" id="emailerror">your login is successful</span>
            </div>
            <div class="mb-5">
                <p class="text-1xl capitalize bg-green-400 py-5">Ready to get start aotumaticly. Wite 10 second...</p>
            </div>
        </div>
        `
           modal.style.display = 'block';
       setTimeout(() => {
           window.location ='page.html';
        }, 10000);
       }
       else {
        modal.innerHTML=`
        <div class="bg-gray-400 rounded shadow pb-3 max-w-xs max-h-full text-center ">
            <div class="mb-4">
                <h1 class="text-2xl capitalize">Please Try Agine!</h1>
                <span class="text-1xl capitalize mt-5 border bg-red-400" id="emailerror">not a valed Email or password</span>
            </div>
            <div class="mb-5">
                <p class="text-1xl capitalize bg-green-400 py-5">Try Agine and give correct information</p>
            </div>
        </div>
        `
           modal.style.display = 'block';
           document.getElementById('email').value='';
           document.getElementById('pasword').value='';
       }
        
       }
