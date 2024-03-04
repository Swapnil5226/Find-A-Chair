const meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
const requiredChairs = 4;

export default function findSpareChairs(meetingRooms, requiredChairs) {
    const spareChairs = [];
    let remainingChairs = requiredChairs;

    for (const [occupants, totalChairs] of meetingRooms) {
        const freeChairs = totalChairs - occupants.length;

        if (freeChairs >= 0) {
            spareChairs.push(Math.min(freeChairs, remainingChairs));
            console.log(spareChairs,"spa>>>");
            remainingChairs -= freeChairs;
        }

        if (remainingChairs <= 0) {
            break;
        }
    }

    return remainingChairs > 0 ? 0 : spareChairs;
}
console.log(findSpareChairs(meetingRooms, requiredChairs)); // [0, 1, 3]
