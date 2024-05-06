import { NormalDriveStrategy } from "./Strategy/NormalDriveStrategy";
import { Vehicle } from "./Vehicle";


export class GoodVehicle extends Vehicle {
    constructor() {
        super(new NormalDriveStrategy());
    }
}