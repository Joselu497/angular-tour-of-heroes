export interface Hero{
    id: number;
    name: string;
    class: string;
    race: string;
    attributes: {
        strength: number;
        finesse: number;
        intelligence: number;
        constitution: number;
        memory: number;
        wits: number
    }
}
