const MESSAGES = {
    COMMANDS: {
        MISC: {

            SAY: {
                name: "say",
                aliases: ['s', 'repeat'],
                category: 'misc',
                description: "le bot répète l'argument",
                usage: "<votre_message>",   
                args: true,
                hasMention: false,
                permissions: false,
            },

            SALUT: {
                name: 'salut',
                aliases: ['hello'],
                category: 'misc',
                description: "Renvoie un salut",
                usage: "Renvoi un salut",
                args: false,
                hasMention: false,
                permissions: false,
            },

            USERINFO: {
                name: 'userinfo', 
                aliases: ['ui', 'uinfo'], 
                category: 'misc',
                description: 'Renvoie les infos d\'un utilisateur mentionné.',
                usage: "<votre_mention>",
                args: true,
                hasMention: true,
                permissions: false,
            },

            HELP: {
                name: "help",
                aliases: ['help'],
                category: 'misc',
                description: "Renvoie une liste de commande ou les informations sur une seule commande",
                args: false,
                hasMention: false,
                usage: "<votre_message>",
                permissions: false,
            },

            TAUNT: {
                name: 'taunt', 
                aliases: ['taunt', 't'],
                category: ['misc'],
                description: "reprend le dernier message de l'utilisateur mentionné et le renvoie modifié",
                usage: '<your_mention>',
                args: true,
                hasMention: true,
                permissions: false,
            }
        },
        MODERATION: {

            KICK: {
                name: 'kick', 
                aliases: ['k', 'expulse'],
                category: 'moderation',
                description: 'Expulse un membre du serveur',
                usage: '<@mention> <raison_du_kick(peut être vide)>',
                args: true,
                hasMention: true,
                permissions: true,
            },

            MUTE: {
                name: 'mute', 
                aliases: ['chut', 'shh'],
                category: 'moderation',
                description: "Mute un utilisateur",
                usage: '<@mention> <time>',
                args: true,
                hasMention: true,
                permissions: true,
            },

            PURGE: {
                name: 'purge', 
                aliases: ['p', 'erase', 'clear'],
                category: 'moderation',    
                description: 'Supprime un nombre x de messages entre 1 et 100',
                usage: '<nbr_de_messages_entre_1_et_100>',
                args: true,
                hasMention: false,
                permissions: false,
            },

            UNMUTE: {
                name: 'unmute', 
                aliases: ['unmute'],
                category: 'moderation',
                description: "Unmute un utilisateur",
                usage: '<@mention>',
                args: true,
                hasMention: true,
                permissions: true,
            }

        },
        MUSIC: {

            PLAY: {
                name: 'play',
                aliases: ['skip', 'stop'],
                category: 'music',
                description: "Play une musique",
                usage: "<url_YT>",
                args: false,
                hasMention: false,
                permissions: false,
            }
        },
        DICE: {
            
            DICE: {
                name: 'dice',
                aliases: ['d','d2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'd10', 'd11', 'd12', 'd15', 'd20', 'd100'],
                category: 'dice',
                description: "roll x dice of x (d et dice = d20)",
                usage: "<your_number_of_dice_within_the_limit_of_100>",
                args: false,
                hasMention: false,
                permissions: false,
            }
        },
        ADMIN: {

            EVAL: {
                name: 'eval',
                aliases: ['eval'],
                category: 'admin',
                description: "Renvoie un code javascript testé",
                usage: "<key> <value>",
                args: true,
                hasMention: false,
                permissions: true,
            },
            CONFIG: {
                name: "config",
                aliases: ['config'],
                category: 'admin',
                description: "Modifier la base de donnée",
                usage: "<code_to_test>",
                args: true,
                hasMention: false,
                permissions: true,
            }
        }
    }
}

exports.MESSAGES = MESSAGES;