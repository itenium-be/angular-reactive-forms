const regex = /^\d{2}.\d{2}.\d{2}-\d{3}.\d{2}$/;
const altRegex = /^\d{11}$/;

const clean = function(insz: string): string {
  return insz.replace(/[.-]/g, '');
};

const calculate = function(modulo: string, checksum: number): boolean {
  const rest = parseInt(modulo, 10) % 97;
  return 97 - rest === checksum;
};

/**
 * Validates the INSZ
 * INSZ number in format `xx.xx.xx-xxx.xx` or `xxxxxxxxxxx`
 */
export default function(insz: string): boolean {
  if (typeof insz !== 'string') {
    throw new TypeError('Expected INSZ number to be a `string`, got `' + (typeof insz) + '`');
  }

  if (!regex.test(insz) && !altRegex.test(insz)) {
    return false;
  }

  const cleanedSSN = clean(insz);
  const moduloCheckString = cleanedSSN.slice(0, cleanedSSN.length - 2);
  const checksum = parseInt(cleanedSSN.slice(cleanedSSN.length - 2), 10);

  return calculate(moduloCheckString, checksum) || calculate('2' + moduloCheckString, checksum);
};
