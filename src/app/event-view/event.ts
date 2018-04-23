export class event {
    constructor(
        public title: string,
        public author: string,
        public description: string,
        public type: string,
        public time: Date,
        public created: Date,
        public tags: string[],
        public location: {
            name: string,
            latitude: Number
            longitude: Number,
        },
        public upcoming: boolean
    ) {}
}