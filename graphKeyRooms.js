function joinRoom(rooms) {
  let access = new Set([0]);

  for (let room of access) {
    rooms[room].forEach((item) => access.add(item));
  }

  return access.size === rooms.length;
}
console.log(joinRoom([[1, 3], [3, 0, 1], [2], [0]]));
console.log(joinRoom([[1], [2], [3], []]));
