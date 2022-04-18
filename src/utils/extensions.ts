interface String {
  hexOpacity(opacity: number): string;
}

/**
 * Implements opacity on a hexadecimal value
 *
 * The return is a conversion to RGBA
 */
String.prototype.hexOpacity = function (opacity: number) {
  const hex = String(this);
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    c = Number(c);
    return (
      "rgba(" +
      // eslint-disable-next-line no-bitwise
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      `,${String(opacity)})`
    );
  }
  return hex;
};
