import { FormControl } from "@angular/forms";
import { isValidInss } from "./InssValidator";

describe('InssValidator', () => {
  it('validates a correct INSS', () => {
    const input = '78.05.20-101.02';
    const validator = isValidInss();
    const result = validator(new FormControl(input));
    expect(result).toBeNull();
  });

  it('validates an invalid INSS', () => {
    const input = '78.05.20-101.xx';
    const validator = isValidInss();
    const result = validator(new FormControl(input));
    expect(result).toEqual({inss: true});
  });
});
