export enum MemberStatus {
    A = "Active Member",
    B = "Inactive Member",
    C = "Alumni"
  }

export class Persona {
    activeMembershipDuration: string;
    constructor(
        public id: string,
        public status: MemberStatus,
        public emailadd: string,
        public displayname: string,
        public pronouns: string,
        public shortbio: string,
        public statement: string,
        public stall: string,
        public sitelink: string,
        public joindate: Date,
        public graduatedate?: Date,
        public posting?: string,
        public portrait?: string,
        public worksample?: string
    ){
        if(this.portrait === undefined){
            //TODO grab default URL
        }
        if(this.worksample === undefined){
            //TODO grab default URL
        }
        this.activeMembershipDuration = "TODO implement";
    }
}