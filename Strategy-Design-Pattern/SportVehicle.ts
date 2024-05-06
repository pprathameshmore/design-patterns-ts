import { SportDriveStrategy } from "./Strategy/SportDriveStrategy";
import { Vehicle } from "./Vehicle";

export class SportVehicle extends Vehicle {
    constructor() {
        super(new SportDriveStrategy())
    }
}

