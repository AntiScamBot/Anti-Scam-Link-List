// List of the Scam Links ect, Free to use

const hardDomainBlacklist = {
	"discrod-apps.xyz": "Discord scam site",
	"discocrd-gift.com": "Discord scam site",
	"dliscordl.com": "Discord scam site",
	"dlscrod-app.xyz": "Discord scam site",
	"discord-app.xyz": "Discord scam site",
	"freenitro.com": "Discord scam site",
	"free-nitro.com": "Discord scam site",
	"discordieam.com": "Discord scam site",
	"freediscordnitro.com": "Discord scam site",
	"discocrd-gift.com": "Discord scam site",
	"dateingclub.com": "Misc. Scam link",
	"grabify.com": "IP Logging link",
	"discordgifts.com": "Discord scam site",
	"discordappp.com": "Discord scam site",
	"discordap.com": "Discord scam site",
	"boostnitro.com": "Discord scam site",
	"discordboost.com": "Discord scam site",
        "discordsteaml.com": "Discord scam site",
        "team-discord.com": "Discord scam site",
        "boostdiscorcl.shop": "Discord scam site",
        "csgorun-offical.site": "Steam scam site",
        "academymoderator-join.com": "Discord scam site",
        "gift-nitro.events": "Discord scam site",
        "steellseriesnitros.com": "Discord scam site",
        "dlscord.top": "Discord scam site",
        "dlscord.top": "Discord scam site",
        "gg-nitro.com": "Discord scam site",
	"discrods.gift": "Discord scam site"


}

const hardPhraseBlacklist = {
	"bro watch this, working nitro gen": "Nitro Scam",
	"Get Discord Nitro for Free": "Nitro Scam",
	"Click to get Nitro:": "Nitro Scam",
	"Discord Nitro with Steam": "Nitro Scam",
	"Free distribution of": "Scam text",
	"Free discord nitro": "Likely Scam Message - \"Free Discord Nitro\"",
	"get free nitro": "Likely scam message",
	"airdrop from steam": "Steam-Discord AirDrop Scam"
}

// has to be decently specific or uncommon, spans sites code for it
const blacklistedSiteContent = {
	"Get 3 months of Discord Nitro free from STEAM.": "Steam-Discord Scam",
	"pososi_mudila.webm": "Steam-Discord scam",
	"3 months of Discord Nitro free": "Discord Nitro Scam"
}

module.exports.hardDomainBlacklist = {
	hardDomainBlacklist,
	hardPhraseBlacklist,
	blacklistedSiteContent
}
