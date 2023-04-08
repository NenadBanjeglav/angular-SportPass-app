export class Packet{
    id:number;
    name:string;
    trainings_per_month:number;
    months:number;
    price_per_month:number;
    price:number;

    constructor(obj?:any){
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || '';
        this.trainings_per_month = obj && obj.trainings_per_month || 0;
        this.months = obj && obj.months || 0;
        this.price_per_month = obj && obj.price_per_month || 0;
        this.price = obj && obj.price || 0;
    }
}

export class PacketList{
    count:number;
    results:Packet[];

    constructor(obj?:any){
        this.count = obj && obj.count || 0;
        this.results = obj && obj.results && obj.results.map((elem: Packet)=> new Packet(elem)) || [];
    }
}

export class City{
    id:number;
    name:string;

    constructor(obj?:any){
        this.id = obj && obj.id || 0;
        this.name = obj && obj.name || '';
    }
}

export class Membership{
    start_date: Date;
    packet: Packet;

    constructor(obj?: any) {
        this.start_date = obj && obj.start_date && new Date(obj.start_date) || null;
        this.packet = obj && obj.packet && new Packet(obj.packet) || null;
    }

    get end_date(): Date {
        let end = new Date(this.start_date);
        end = new Date(end.setMonth(end.getMonth() + this.packet.months));
        return end;
    }

    get status(): number {
        return Math.round((new Date().getTime() - this.start_date.getTime())/(this.end_date.getTime() - this.start_date.getTime())*100);
    }
}

export class Account {
    email: string;
    password: string;
    name: string;
    city: City;
    memberships: Membership[] = [];

    constructor(obj?: any) {
        this.email = obj && obj.email || null;
        this.password = obj && obj.password || null;
        this.name = obj && obj.name || null;
        this.city = obj && obj.city && new City(obj.city) || null;
        this.memberships = obj && obj.memberships && obj.memberships.map((jsonMembership: any) => { return new Membership(jsonMembership); }) || [];
    }
}

export class AccountMembership {
    email: string;
    password: string;
    membership: Membership;

    constructor(obj?: any) {
        this.email = obj && obj.email || null;
        this.password = obj && obj.password || null;
        this.membership = obj && obj.membership && new Membership(obj.membership) || null;
    }
}