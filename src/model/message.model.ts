const messages: Array<string> = ['Banana', 'Platano','Aguacate']

export const messageModel = {
    getMessages: () => {
        return messages;
    },
    saveMessage: (message: string) => {
        console.log(message);
        messages.push(message)
        const id = messages.findIndex(element => element===message);
        return id;
    }
}