function calculateSpace(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let totalSpace = width * length * height;
    let index = 3;
    let command = input[index];
    while (command !== "Done") {
        let boxes = Number(command);
        totalSpace -= boxes;
        if (totalSpace <= 0) {
            console.log(`No more free space! You need ${Math.abs(totalSpace)} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (totalSpace > 0) {
        console.log(`${totalSpace} Cubic meters left.`);
    }
}