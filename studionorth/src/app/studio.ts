export class Stall {
    constructor(
        public id: string,
        public name: string,
        public sqfootage: number,
        public dimx: number,
        public dimy: number
    ){}
}

export class Studio{
    constructor(
        public rent: number,
        public name: string,
        public pitch: string,
        public tools: string[],
        public stalls: Stall[]
    ){}
}