import { CacheType, CommandInteraction } from "discord.js";
import { VintedBotCommand, ApplicationCommandTypes } from "../interfaces/ApplicationCommand";
import { DiscordClient } from "../DiscordClient";


export default class implements VintedBotCommand {
    type = ApplicationCommandTypes.CHAT_INPUT;
    name = "refreshconfigurations";
    description = "Update the current config without restarting the bot";

    execute = async(client: DiscordClient, interaction: CommandInteraction<CacheType>):Promise<void> => {
        client.VintedApi.configuration.loadConfiguration();
        interaction.reply({content: "✅ Refreshed configuration"})
    }
}