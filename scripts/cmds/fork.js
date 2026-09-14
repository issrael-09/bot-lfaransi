module.exports = {
    config: {
        name: "fork",
        version: "2.7",
        author: "MahMUD",
        countDown: 5,
        role: 0,
        description: {
            en: "Get the Facebook profile link"
        },
        category: "github",
        guide: {
            en: "{pn}: Get the Facebook link"
        }
    },

    onStart: async function ({ api, event }) {
        const facebookLink = "https://www.facebook.com/profile.php?id=61594329770983";

        const response = `✓ | Facebook Profile:\n\n${facebookLink}`;

        return api.sendMessage(
            response,
            event.threadID,
            event.messageID
        );
    }
};
