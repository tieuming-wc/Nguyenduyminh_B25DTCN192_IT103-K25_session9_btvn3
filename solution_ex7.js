let rooms = [
  {
    roomId: "P101",
    roomType: "Deluxe",
    pricePerNight: 1500000,
    status: "VACANT",
  },
  {
    roomId: "P102",
    roomType: "Standard",
    pricePerNight: 1000000,
    status: "OCCUPIED",
  },
  {
    roomId: "P103",
    roomType: "Superior",
    pricePerNight: 1800000,
    status: "MAINTENANCE",
  },
];

console.log("--- DANH SÁCH PHÒNG BAN ĐẦU ---");
for (const room of rooms) {
  console.log(
    room.roomId +
      " | " +
      room.roomType +
      " | " +
      room.pricePerNight +
      " | " +
      room.status,
  );
}

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT",
};

rooms.push(newRoom);

console.log("--- SAU KHI THÊM P104 ---");
for (const room of rooms) {
  console.log(
    room.roomId +
      " | " +
      room.roomType +
      " | " +
      room.pricePerNight +
      " | " +
      room.status,
  );
}

for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P101") {
    rooms[i].status = "OCCUPIED";
  }
}

console.log("--- SAU KHI CẬP NHẬT P101 ---");
for (const room of rooms) {
  console.log(
    room.roomId +
      " | " +
      room.roomType +
      " | " +
      room.pricePerNight +
      " | " +
      room.status,
  );
}

for (let i = 0; i < rooms.length; i++) {
  if (rooms[i].roomId === "P103") {
    rooms.splice(i, 1);
    break;
  }
}

console.log("--- SAU KHI XÓA P103 ---");
for (const room of rooms) {
  console.log(
    room.roomId +
      " | " +
      room.roomType +
      " | " +
      room.pricePerNight +
      " | " +
      room.status,
  );
}
