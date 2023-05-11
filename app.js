const batteryLevel = require('battery-level');
//const say = require('say')
const Say = require('say').Say
const s = new Say('win32')

function check(){
    batteryLevel().then(level => {
        console.log('Battery level: '+level);
        //=> 0.55
        if(level <= 0.2){
            s.speak('Battery low '+parseFloat(level*10).toFixed(2)+' Percent', 'Microsoft Zira Desktop', 1.0);
            //console.log('Low battery '+parseFloat(level*10).toFixed(2)+' Percent');
        }else if(level >= 0.95){
            s.speak('Battery full '+parseFloat(level*10).toFixed(2)+' Percent', 'Microsoft Zira Desktop', 1.0);
            //console.log('Battery full '+parseFloat(level*10).toFixed(2)+' Percent');
        }
    });
}


//s.speak('Bachao battery low ho gaya hai', 'Microsoft Zira Desktop', 1.2)
check();

setInterval(()=>{
    check();
}, 60*1000)

//npm i say
//npm i battery-level