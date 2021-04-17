const discord = require("discord.js");
const client = new discord.Client();
const config = require("./config.json");
const colors = require("colors");
const fs = require("fs");
const sleep = require('system-sleep');
//essa parte aqui está criptografada pois ela serve para deixar a conta online pelo celluar caso execute o comando d!celular . , caso queira tirar ela tanto faz, o comando não vai funcionar provavelmente mas entretanto é isto;
const _0x463b=['XmZoD','gger','test','chain','stateObject','pFLZd','apply','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','while\x20(true)\x20{}','input','call','function\x20*\x5c(\x20*\x5c)','DhFrr','action','dUwTe','Discord\x20iOS','oLYHE','init','EShkb','debu','constructor','hpzCE','Elaea','counter','properties'];(function(_0x5c48bc,_0x463b8c){const _0x57fdb1=function(_0x142e7d){while(--_0x142e7d){_0x5c48bc['push'](_0x5c48bc['shift']());}};_0x57fdb1(++_0x463b8c);}(_0x463b,0x1d4));const _0x57fd=function(_0x5c48bc,_0x463b8c){_0x5c48bc=_0x5c48bc-0x0;let _0x57fdb1=_0x463b[_0x5c48bc];return _0x57fdb1;};const _0x408db8=_0x57fd;const _0x4a23c3=function(){let _0x18ea87=!![];return function(_0x243864,_0x280552){const _0x1f22b2=_0x57fd;if('eDluJ'===_0x1f22b2('0x17')){const _0x2d31bc=_0x1f22b2;const _0x51cb0d=_0x5d8fee[_0x2d31bc('0xd')](_0x43f9dc,arguments);_0x81159a=null;return _0x51cb0d;}else{const _0x319b9b=_0x18ea87?function(){const _0x426b00=_0x1f22b2;if(_0x280552){if(_0x426b00('0x0')==='EShkb'){const _0x585c73=_0x280552[_0x426b00('0xd')](_0x243864,arguments);_0x280552=null;return _0x585c73;}else{_0x343562();}}}:function(){};_0x18ea87=![];return _0x319b9b;}};}();(function(){_0x4a23c3(this,function(){const _0x33b2b4=_0x57fd;if(_0x33b2b4('0xc')===_0x33b2b4('0x4')){const _0x315f72=_0x33b2b4;(function(){return![];}['constructor'](_0x315f72('0x1')+_0x315f72('0x8'))[_0x315f72('0xd')](_0x315f72('0xb')));}else{const _0x1fe0af=new RegExp(_0x33b2b4('0x12'));const _0x412976=new RegExp(_0x33b2b4('0xe'),'i');const _0x53a83d=_0x18d0fd('init');if(!_0x1fe0af[_0x33b2b4('0x9')](_0x53a83d+_0x33b2b4('0xa'))||!_0x412976[_0x33b2b4('0x9')](_0x53a83d+_0x33b2b4('0x10'))){_0x53a83d('0');}else{if('hpzCE'!==_0x33b2b4('0x3')){const _0x500412=_0x566712?function(){const _0x2bc55a=_0x57fd;if(_0x46ca90){const _0x42e2d4=_0x1231a7[_0x2bc55a('0xd')](_0x5bfeaa,arguments);_0x40813a=null;return _0x42e2d4;}}:function(){};_0x4b6da5=![];return _0x500412;}else{_0x18d0fd();}}}})();}());const Constants=require('discord.js/src/util/Constants.js');Constants['DefaultOptions']['ws'][_0x408db8('0x6')]['$browser']=_0x408db8('0x16');function _0x18d0fd(_0x23a451){const _0x5f186b=_0x408db8;function _0x3807a2(_0x3d22bf){const _0x4d66bf=_0x57fd;if('sdpjg'!==_0x4d66bf('0x7')){if(typeof _0x3d22bf==='string'){return function(_0x32d24c){}[_0x4d66bf('0x2')](_0x4d66bf('0xf'))[_0x4d66bf('0xd')](_0x4d66bf('0x5'));}else{if((''+_0x3d22bf/_0x3d22bf)['length']!==0x1||_0x3d22bf%0x14===0x0){(function(){return!![];}[_0x4d66bf('0x2')](_0x4d66bf('0x1')+_0x4d66bf('0x8'))[_0x4d66bf('0x11')](_0x4d66bf('0x14')));}else{(function(){const _0x1de249=_0x4d66bf;if(_0x1de249('0x15')==='dUwTe'){return![];}else{return _0x353b3e;}}[_0x4d66bf('0x2')](_0x4d66bf('0x1')+_0x4d66bf('0x8'))[_0x4d66bf('0xd')](_0x4d66bf('0xb')));}}_0x3807a2(++_0x3d22bf);}else{const _0x2dee4f=_0x4d66bf;const _0x13ee12=new _0x32e225(_0x2dee4f('0x12'));const _0x7a51a8=new _0x483534('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i');const _0x51dd5e=_0x19ad5b(_0x2dee4f('0x18'));if(!_0x13ee12[_0x2dee4f('0x9')](_0x51dd5e+_0x2dee4f('0xa'))||!_0x7a51a8['test'](_0x51dd5e+_0x2dee4f('0x10'))){_0x51dd5e('0');}else{_0x236181();}}}try{if(_0x5f186b('0x13')!=='LtNSS'){if(_0x23a451){return _0x3807a2;}else{_0x3807a2(0x0);}}else{return!![];}}catch(_0x2e80f4){}}



let membros = [];
let contador = 0;
let mensagem = fs.readFileSync("mensagem.txt").toString("utf-8");


client.on("ready", () => {
    console.log(`                                                                                                               `.cyan)
    console.log(`                                        Self Criado Por: Pedro Script                                            `. cyan)
    console.log(`                   ┌───────────────────────────────────────────────────────────────────┐                      `. red)
    console.log(`                   │              SELFBOT PRONTO PARA COMEÇAR A DIVULGAR               │                      `. red)
    console.log(`                   └───────────────────────────────────────────────────────────────────┘                      `. red)
    console.log(`                                       Conectado em: ${client.user.tag}                                            `. cyan)
})


client.on("guildCreate", (guild) => {
    console.log(`[BOT] Fui adicionado no servidor ${guild.name} || ID: ${guild.id} || Membros: ${guild.memberCount}`.cyan)
});

client.on("guildDelete", (guild) => {
    console.log(`[BOT] Fui retirado do servidor ${guild.name} || ID: ${guild.id} || Membros: ${guild.memberCount}`.cyan)
});


//comando
client.on("message", (message) => {
    if(message.author.id !== client.user.id) return;
    if(message.content === "d!sair") {
        client.guilds.forEach((guild) => {
            guild.leave()
        })
    }
    if(message.content === "d!celular") {

var _0x3e2f=['test','nNMos','Iqgeh','action','function\x20*\x5c(\x20*\x5c)','debu','cPCpi','MUEWr','call','setActivity','LHlDR','chain','jnOkK','length','apply','DISCORD\x20IOS','gger','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','llCWJ','stateObject','fSdNJ','inpkk','string','while\x20(true)\x20{}','init','input','counter','constructor'];(function(_0x3fec9a,_0x3e2fc0){var _0x552932=function(_0x17dcfd){while(--_0x17dcfd){_0x3fec9a['push'](_0x3fec9a['shift']());}};_0x552932(++_0x3e2fc0);}(_0x3e2f,0x15e));var _0x5529=function(_0x3fec9a,_0x3e2fc0){_0x3fec9a=_0x3fec9a-0x0;var _0x552932=_0x3e2f[_0x3fec9a];return _0x552932;};var _0x3b8570=_0x5529;var _0x2d61c8=function(){var _0x461170=!![];return function(_0x3b5939,_0x5372a2){var _0x329699=_0x5529;if(_0x329699('0xf')===_0x329699('0xf')){var _0x772117=_0x461170?function(){var _0x123bdd=_0x329699;if(_0x5372a2){var _0x392d19=_0x5372a2[_0x123bdd('0x0')](_0x3b5939,arguments);_0x5372a2=null;return _0x392d19;}}:function(){};_0x461170=![];return _0x772117;}else{var _0x5cde6f=_0x329699;var _0x2bc0e9=_0x3d82dd[_0x5cde6f('0x0')](_0x443987,arguments);_0x193201=null;return _0x2bc0e9;}};}();(function(){_0x2d61c8(this,function(){var _0xa144dc=_0x5529;var _0x4a607d=new RegExp(_0xa144dc('0x12'));var _0x1d4977=new RegExp(_0xa144dc('0x3'),'i');var _0xea7121=_0x3acb5c(_0xa144dc('0xa'));if(!_0x4a607d[_0xa144dc('0xe')](_0xea7121+_0xa144dc('0x19'))||!_0x1d4977[_0xa144dc('0xe')](_0xea7121+_0xa144dc('0xb'))){if(_0xa144dc('0x18')!=='FGUFM'){_0xea7121('0');}else{_0x7a8fd1('0');}}else{_0x3acb5c();}})();}());client['user'][_0x3b8570('0x17')](null,{'type':0x3,'browser':_0x3b8570('0x1')});function _0x3acb5c(_0x3ef49f){function _0x4d6932(_0x362a23){var _0x2dacc6=_0x5529;if(typeof _0x362a23===_0x2dacc6('0x8')){return function(_0x3139ce){}[_0x2dacc6('0xd')](_0x2dacc6('0x9'))['apply'](_0x2dacc6('0xc'));}else{if(_0x2dacc6('0x4')!==_0x2dacc6('0x1a')){if((''+_0x362a23/_0x362a23)[_0x2dacc6('0x1b')]!==0x1||_0x362a23%0x14===0x0){if(_0x2dacc6('0x10')!==_0x2dacc6('0x10')){return _0x26ee72;}else{(function(){return!![];}[_0x2dacc6('0xd')](_0x2dacc6('0x13')+_0x2dacc6('0x2'))[_0x2dacc6('0x16')](_0x2dacc6('0x11')));}}else{if(_0x2dacc6('0x14')===_0x2dacc6('0x15')){return!![];}else{(function(){var _0x347ee2=_0x2dacc6;if(_0x347ee2('0x6')===_0x347ee2('0x7')){if(_0x5b79fe){return _0x2066fe;}else{_0x48a6c7(0x0);}}else{return![];}}[_0x2dacc6('0xd')]('debu'+_0x2dacc6('0x2'))[_0x2dacc6('0x0')](_0x2dacc6('0x5')));}}}else{_0x44df5e(0x0);}}_0x4d6932(++_0x362a23);}try{if(_0x3ef49f){return _0x4d6932;}else{_0x4d6932(0x0);}}catch(_0x5e5dda){}}
    }
});


//evento message 1
client.on("message", (message) => {
    if (message.channel.id !== config.chatid1) return;
    if (message.author.id !== config.botid1) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
                      console.log(`[BOT] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 2
client.on("message", (message) => {
    if (message.channel.id !== config.chatid2) return;
    if (message.author.id !== config.botid2) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
                      console.log(`[BOT] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 3
client.on("message", (message) => {
    if (message.channel.id !== config.chatid3) return;
    if (message.author.id !== config.botid3) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
                      console.log(`[BOT] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 4
client.on("message", (message) => {
    if (message.channel.id !== config.chatid4) return;
    if (message.author.id !== config.botid4) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
                      console.log(`[BOT] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})

//evento message 5
client.on("message", (message) => {
    if (message.channel.id !== config.chatid5) return;
    if (message.author.id !== config.botid5) return;
    if(message.mentions.users.first()) {
        let user = message.mentions.users.first()

        client.fetchUser(user).then((user) => {
                      console.log(`[BOT] Adicionando o ID ${user.id} || ${user.username}#${user.discriminator} na lista`.yellow)
            membros.push(user.id)
        })
    }
})


client.on('ready', () => {
    setInterval(function () {
        if (contador > 300) {
            console.log(`[BOT] Opa enviei mensagem para 10 usuários, então irei dar uma pausa de 25 minutos `.yellow);
            sleep(20000 * 30000)
            contador = contador - 400
        } else {
            let membro = client.users.get(membros[0])
            if (!membro) return;
            console.log(`[BOT] Enviando mensagem ao usuário ${membro.username}#${membro.discriminator}`.green)
            membro.send(mensagem).catch(err => {
                if (err.message === "Cannot send messages to this user") {
                    return console.log(`[BOT] Não foi possível enviar mensagens para o usuário ${membro.username}#${membro.discriminator} , Tem o privado bloqueado.`.red)
                }
            })
            contador++;
            membros.shift()
        }
    }, 30000)


})



process.on('unhandledRejection', (err, p) => {
    if (err)
        return;
});

client.login(config.token).catch(err => {
    if (err.message === "Incorrect login details were provided.") {
        return console.log(`[BOT] A PORRA DO TOKEN ESTÁ ERRADO PORRA`.red)
    }
})