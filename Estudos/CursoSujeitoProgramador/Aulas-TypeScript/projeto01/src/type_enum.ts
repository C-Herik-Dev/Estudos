// type ENUM -> Enumerar

enum DisignColors {
  white = "#ffffff",
  black = "#000000",
  blue = "#0000ff",
  red = "#ff0000",
  green = "#00ff00",
}

console.log(DisignColors.black);

enum StatusPermission {
  ADMIN, // Inicia do 0, mas posso atribuir pra começar pelo 1 por exemplo.
  USER,
  SUPPORT
}

console.log(StatusPermission.SUPPORT)