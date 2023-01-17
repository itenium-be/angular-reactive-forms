import { FormBuilder } from "@angular/forms";
import { getFormValidationErrors } from "./helpers";

const fb = new FormBuilder();

describe('getFormValidationErrors', () => {
  it('valid form has no errors', () => {
    const frm = fb.group({ fld: 'value' });
    const result = getFormValidationErrors(frm);
    expect(result.length).toBe(0);
    expect(frm.valid).toBeTrue();
  });

  it('recognizes FormGroup errors', () => {
    const frm = fb.group({ fld: 'value' });
    frm.setErrors({ required: true });
    const result = getFormValidationErrors(frm);
    expect(result).toEqual([{ prop: '', errors: {required: true} }]);
  });

  it('recognizes FormControl errors', () => {
    const frm = fb.group({ fld: 'value' });
    frm.get('fld')!.setErrors({ required: true });
    const result = getFormValidationErrors(frm);
    expect(result).toEqual([{ prop: 'fld', errors: {required: true} }]);
  });

  it('recognizes child FormGroup errors', () => {
    const frm = fb.group({ grp: fb.group({ fld: 'value' }) });
    frm.get('grp')!.setErrors({ required: true });
    const result = getFormValidationErrors(frm);
    expect(result).toEqual([{ prop: 'grp', errors: {required: true} }]);
  });

  it('recognizes child FormGroup.FormControl errors', () => {
    const frm = fb.group({ grp: fb.group({fld: 'value'})});
    frm.get('grp')!.get('fld')!.setErrors({ required: true });
    const result = getFormValidationErrors(frm);
    expect(result).toEqual([{ prop: 'grp.fld', errors: {required: true} }]);
  });

  it('recognizes child FormArray errors', () => {
    const frm = fb.group({ grp: fb.array(['val1', 'val2']) });
    frm.get('grp')!.setErrors({ required: true });
    const result = getFormValidationErrors(frm);
    expect(result).toEqual([{ prop: 'grp', errors: { required: true } }]);
  });

  it('recognizes child FormArray.FormControl errors', () => {
    const frm = fb.group({ grp: fb.array(['val1', 'val2']) });
    frm.get('grp.0')!.setErrors({ required: true });
    const result = getFormValidationErrors(frm);
    expect(result).toEqual([{ prop: 'grp.0', errors: { required: true } }]);
  });
});
