window.addEventListener("load",()=>{
          let lat;
          let log;
          let timexone=document.querySelector(".location-timezoe");
          let temper=document.querySelector(".temprature-degree");
          let descrip=document.querySelector(".temperature-description");
          let icon=document.querySelector(".icon");
          let typeChange=document.querySelector(".temperature span");
          
          if(navigator.geolocation){
                    navigator.geolocation.getCurrentPosition(po=>{
                              lat=po.coords.latitude;
                              log=po.coords.longitude;
                              let apikey="34e844750c878d39b75f9456638275c7";
                              let baseurl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${apikey}`;
                               fetch(baseurl).then(res=>{
                                        console.log(res); 
                                        return res.json();
                               }).then(data=>{
                                         console.log(data);
                                         var realTemp;
                                       
                                         typeChange.addEventListener('click',()=>{
                                                  
                                                   console.log(typeChange);
                                                   if(typeChange.textContent==="F"){
                                                             typeChange.textContent="C";
                                                             console.log(data.main.temp);
                                                             temper.innerHTML=Math.floor(data.main.temp-273.15);
                                                              console.log(realTemp);
                                                   }
                                                   else{
                                                             typeChange.textContent="F";
                                                             console.log(realTemp);
                                                             temper.innerHTML= Math.floor((data.main.temp-273.15)*9)/5+32;
                                                             console.log(realTemp);
                                                   }
                                         });
                                         
                                         
                                         let realSum=data.weather[0].description;
                                         let realTimezone=data.name+","+data.sys.country;
                                         let realIcon=data.weather[0].icon;
                                         timexone.innerHTML=realTimezone;
                                         temper.innerHTML=Math.floor((data.main.temp-273.15)*9)/5+32;
                                         descrip.innerHTML=realSum;
                                         icon.innerHTML= `<img src="http://openweathermap.org/img/wn/${realIcon}.png"/>`;

                                         
                               }).catch(err=>{
                                         console.log(err);
                               });

                    });
          }
});