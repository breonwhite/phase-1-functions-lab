
const hqLocation = 42;

function distanceFromHqInBlocks(location) {
    let distanceB = location - hqLocation;
    return Math.abs(distanceB);
}

function distanceFromHqInFeet(location) {
    return distanceFromHqInBlocks(location) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * 264);
}

function calculatesFarePrice(start, destination) {
    let feet = distanceTravelledInFeet(start, destination);
    if (feet >= 2500) {
        return `cannot travel that far`
    } else if (feet >= 2000) {
        return 25;
    } else if (feet >= 400) {
        return (feet-400)*0.02;
    } else if (feet < 400) {
        return 0;
    }
}