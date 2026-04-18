function generateLore(name) {
  const styles = [
    "ancient civilization lost in time",
    "highly advanced quantum society",
    "mystical energy-driven beings",
    "war-torn planet with constant conflict"
  ];

  const random = styles[Math.floor(Math.random() * styles.length)];

  return `${name} is a ${random}. Its inhabitants evolved under extreme cosmic conditions, shaping a unique destiny among the stars.`;
}

module.exports = generateLore;