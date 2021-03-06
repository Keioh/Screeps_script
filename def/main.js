var worker_task = require('worker'); 
var builder_task = require('builder');

module.exports.loop = function(){
    
    for(var name in Game.creeps)
    {
        var creep = Game.creeps[name];
        
        //worker task
        if(creep.name == 'worker')
        {
            worker_task.run(creep);
        }
              
        if(creep.name == 'builder')
        {
            builder_task.run(creep);
        }
    }
}