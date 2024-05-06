import { SportDriveStrategy } from "./Strategy/SportDriveStrategy";
import { Vehicle } from "./Vehicle";

export class OffRoadVehicle extends Vehicle {
    constructor() {
        super(new SportDriveStrategy())
    }
}
