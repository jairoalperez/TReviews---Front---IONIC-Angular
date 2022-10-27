export class global {
    public static user: {
        username: String
    }

    //seters
    public static setUser(data) {
        this.user = data;
        return this.user
    }

    //geters
    public static getUser() {
        return this.user;
    }
}