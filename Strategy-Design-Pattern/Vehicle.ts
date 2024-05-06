import { DriveStrategy } from "./Strategy/DriveStrategy";

export class Vehicle {
    driveStrategy: DriveStrategy;

    constructor(driveStrategy: DriveStrategy) {
        this.driveStrategy = driveStrategy;
    }

    public drive(): void {
        this.driveStrategy.drive();
    }
}

