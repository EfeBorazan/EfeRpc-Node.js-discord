fs = require('fs')

var clid = fs.readFileSync("C:/Windows/temp/clientid.txt").toString('utf-8');

const clientId = clid;
const DiscordRpc = require('discord-rpc');
const RPC = new DiscordRpc.Client({ transport: 'ipc' });


var largetxt = fs.readFileSync("C:/Windows/temp/largeimagetext.txt").toString('utf-8');
var largekey = fs.readFileSync("C:/Windows/temp/largeimagekey.txt").toString('utf-8');
var detail = fs.readFileSync("C:/Windows/temp/detail.txt").toString('utf-8');
var state = fs.readFileSync("C:/Windows/temp/state.txt").toString('utf-8');
var smalltxt = fs.readFileSync("C:/Windows/temp/smallimagetext.txt").toString('utf-8');
var smallkey = fs.readFileSync("C:/Windows/temp/smallimagekey.txt").toString('utf-8');
DiscordRpc.register(clientId);

async function setActivity()
{
    
        if (!RPC) return;
        RPC.setActivity({
            
            details: detail,
            state: state,
            largeImageKey: largekey,
            largeImageText: largetxt,
            smallImageKey: smallkey,
            smallImageText: smalltxt,
        })
  


}

RPC.on('ready', async ()=> {
    setActivity();


})

RPC.login({clientId}).catch(err => console.error(err));