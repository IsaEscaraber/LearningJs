let friend = {
  name: "José",
  gender: "M",
  weight: 85.4,
  fatten(p = 0) {
    console.log("Fed up");
    this.weight += p;
  },
};
console.log(`${friend.name} weighs ${friend.weight}`);
