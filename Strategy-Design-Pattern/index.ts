import { GoodVehicle } from "./GoodVehicle";
import { OffRoadVehicle } from "./OffRoadVehicle";
import { SportVehicle } from "./SportVehicle";

function main() {
    const sportVehicle = new SportVehicle();
    sportVehicle.drive();
    const offRoadVehicle = new OffRoadVehicle();
    offRoadVehicle.drive();
    const goodVehicle = new GoodVehicle();
    goodVehicle.drive();
}

main();