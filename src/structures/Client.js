const { Client } = require('discord.js')

const { readdirSync } = require('fs')
const { join } = require('path')

const erelaManager = require('./Manager')

module.exports = class extends Client {
    constructor(options) {
        super(options)

        this.commands = []
        this.loadCommands()
        this.loadEvents()
        this.manager = erelaManager(this)
    }

    registryCommands() {
        // temporária
        // this.guilds.cache.get('497016955912585229').commands.set(this.commands) //  dev bots
        // this.guilds.cache.get('874053225878274088').commands.set(this.commands) // os cuzaozao
        this.guilds.cache.get('807415820883984413').commands.set(this.commands) // SERVER DO DOUGLAS
        //this.application.commands.set(this.commands) //all
    }

    loadCommands(path = 'src/commands') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const commands = readdirSync(`${path}/${category}`)

            for (const command of commands) {
                const commandClass = require(join(process.cwd(), `${path}/${category}/${command}`))
                const cmd = new (commandClass)(this)

                this.commands.push(cmd)
            }
        }
    }

    loadEvents(path = 'src/events') {
        const categories = readdirSync(path)

        for (const category of categories) {
            const events = readdirSync(`${path}/${category}`)

            for (const event of events) {
                const eventClass = require(join(process.cwd(), `${path}/${category}/${event}`))
                const evt = new (eventClass)(this)

                this.on(evt.name, evt.run)
            }
        }
    }
}