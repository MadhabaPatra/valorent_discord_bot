const Discord=require("discord.js")
const fs=require("fs")
const bot=new Discord.Client()

const token="NzU0MjI1NDgwNzIyMjg0NjE0.X1xpNw.xQuzkuwigNlVojjXdoe9n_us5XE"

const prefix="/"

bot.commands=new Discord.Collection()
const commandFiles=fs.readdirSync("./commands/").filter(file => file.endsWith(".js"))

for(const file of commandFiles){
    const command=require(`./commands/${file}`)

    bot.commands.set(command.name,command)
}

bot.on("ready",()=>{
    console.log("bot is online")
})

bot.on("guildMemberAdd",member=>{
    const channel=member.guild.channels.find(channel=>{channel.name==="general"})
    channel.send(`Welcome to Valorent ,${member}`)
    channel.send(`Lets play Valorent!`)
})

bot.on("message",msg =>{

    if(msg.content.startsWith(prefix)){
        const args=msg.content.slice(prefix.length).split(/ +/)
        const command=args.shift().toLowerCase()

        if(command.startsWith("agent")){
            bot.commands.get('agent').execute(msg,args,command)
        }
        else if(command.startsWith("invite")){
            msg.reply("Invitation Link"+"https://discord.gg/a7JW6q")

        }
        else{
            msg.reply("future command will update soon.. "+"\n"+"thanks")
        }

    }else{
        if(msg.content==="hello"){
            msg.reply("hello friend!")
        }
    }
})

bot.login(token)


