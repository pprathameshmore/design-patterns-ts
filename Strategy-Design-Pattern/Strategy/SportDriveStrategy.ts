import { DriveStrategy } from "./DriveStrategy";

export class SportDriveStrategy implements DriveStrategy {
    drive(): void {
        console.log("Sport Drive Strategy");
    }
}

