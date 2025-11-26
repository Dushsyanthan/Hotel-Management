export interface Room {
    id: number;
    roomNumber: string;
    type: string;
    price: number;
    imageUrl: string;
    description?: string;
    available?: boolean;
}
