let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
