const batteryLevel = require('battery-level');
//const say = require('say')
const Say = require('say').Say
const s = new Say('win32')

function check(){
    batteryLevel().then(level => {
		let currentLevel = parseFloat(level*100).toFixed(0)
        console.log(`Battery level: ${currentLevel}%`);
      
        if(level <= 0.2){
            s.speak(`Battery low ${currentLevel} Percent`, 'Microsoft Zira Desktop', 1.0);
            console.log(`Low battery ${currentLevel} Percent`);
        }else if(level >= 0.99){
            s.speak(`Battery full ${currentLevel} Percent`, 'Microsoft Zira Desktop', 1.0);
            console.log(`Battery full ${currentLevel} Percent`);
        }
    });
}


s.speak('hello, I am your battery', 'Microsoft Zira Desktop', 1.0, ()=>{check();})

setInterval(()=>{
    check();
}, 60*1000)

//npm i say
//npm i battery-level