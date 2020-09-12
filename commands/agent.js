module.exports={
    name:"agent",
    description:"this is a agent command",
    execute(message,args,command){
       
        if(command=="agent"){
            const p="enter the following command to get the link of your favorite agent"+"\n"+"1. KILLJOY: "+"/agent/killjoy"+"\n"+"2. OMEN: "+"/agent/omen"+"\n"+"3. RAZE: "+"/agent/raze"+"\n"+"4 .JETT:"+"/agent/jett"
            +"\n"+"5. REYNA: "+"/agent/reyna"+"\n"+"6. SOVA: "+"/agent/sova"+"\n"+"7. SAGE: "+"/agent/sage"+"\n"+"8. BRIMSTONE:"+"/agent/brimstone"
            +"\n"+"9 .BREACH: "+"/agent/breach"+"\n"+"10. VIPER: "+"/agent/viper"+"\n"+"11 .CYPHER: "+"/agent/cypher"+"\n"+"12 .PHOENIX: "+"/agent/phoenix"+"\n"
            message.reply(p)
        }
        else{
            const myargs=command.slice("agent/".length).split(/ +/)
            const myagent=myargs.shift().toLowerCase()
           
            if(myagent=="killjoy"){
                message.reply("KILLJOY:"+"https://playvalorant.com/en-us/agents/killjoy/")
            }
           else if(myagent=="raze"){
                message.reply("RAZE:"+"https://playvalorant.com/en-us/agents/raze/")
                
            }else if(myagent=="omen"){
                message.reply("OMEN:"+"https://playvalorant.com/en-us/agents/omen/")
            }
            if(myagent=="sage"){
                message.reply("SAGE:"+"https://playvalorant.com/en-us/agents/sage/")
            }
           else if(myagent=="cypher"){
                message.reply("CYPHER:"+"https://playvalorant.com/en-us/agents/cypher/")
                
            }else if(myagent=="viper"){
                message.reply("VIPER:"+"https://playvalorant.com/en-us/agents/viper/")
            }
            else if(myagent=="sova"){
                message.reply("SOVA:"+"https://playvalorant.com/en-us/agents/sova/")
                
            }else if(myagent=="phoenix"){
                message.reply("PHOENIX:"+"https://playvalorant.com/en-us/agents/phoenix/")
            }
            else if(myagent=="reyna"){
                message.reply("REYNA:"+"https://playvalorant.com/en-us/agents/reyna/")
            }
           else if(myagent=="jett"){
                message.reply("JETT:"+"https://playvalorant.com/en-us/agents/jett/")
                
            }else if(myagent=="brimstone"){
                message.reply("BRIMSTONE:"+"https://playvalorant.com/en-us/agents/brimstone/")
            }
            else if(myagent=="breach"){
                message.reply("BREACH:"+"https://playvalorant.com/en-us/agents/breach/")
            }
            else{
                message.reply("no agent found")
            }
        }
    }
}