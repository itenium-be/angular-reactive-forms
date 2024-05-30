import { FormArray, FormControl, FormGroup } from "@angular/forms";

/**
 * Built-in type that is not an object.
 */
export type Primitive =
  | null
  | undefined
  | string
  | number
  | boolean
  | symbol
  | bigint;

/**
 *  Built-in type that is not a collection.
 */
export type BuiltIn = Date | Primitive | RegExp;

/**
 * Makes properties of T optional.
 * If the property has an object type, makes it `Partial<TProp>`.
 */
export type DeepPartial<T> = T extends BuiltIn
    ? T
    : T extends object
        ? { [P in keyof T]?: DeepPartial<T[P]>; }
        : T;

/**
 * Unwraps the properties of a form to their underlying types.
 *
 * for example:
 * ```ts
 * interface MyForm
 * {
 *   a: FormControl<string>;
 *   b: FormGroup<MySubForm>;
 *   c: FormArray<FormGroup<FormItem>;
 * }
 * ```
 * becomes:
 * ```ts
 * interface _MyForm {
 *   a: string;
 *   b: _MySubForm;
 *   c: _FormItem[];
 * }
 * ```
 *
 * Use this when declaring functions working with form values, for example:
 * ```ts
 * function doStuff(frmValue: FormValue<MyForm>): void {
 *   console.log(frmValue.a)
 * }
 * ///...
 * doStuff(frm.getRawValue())
 * ```

 */
export type FormValue<T> = {
    [K in keyof T]: T[K] extends FormControl<infer value>
        ? value
        : T[K] extends FormGroup
            ? FormGroupValue<T[K]>
            : T[K] extends FormArray
                ? FormArrayValue<T[K]>
                : T[K]
}

/**
 * Unwraps the properties of a form to their underlying types and makes properties optional.
 *
 * Use this when working with patchValue or form.value,
 * for example:
 * ```ts
 * ///...
 * const update: PartialFormValue<MyForm> = {
 *   a: "xyz"
 * };
 * frm.patchValue(update)
 * ```
 */
export type PartialFormValue<T> = DeepPartial<FormValue<T>>

/**
 * Type of the underlying value of a FormGroup.
 *
 * ```ts
 * FormGroupValue<FormGroup<MyForm>>
 * ```
 * Is equivalent to:
 * ```ts
 * FormValue<MyForm>;
 * ```
 */
export type FormGroupValue<T> = T extends FormGroup<infer U>
    ? FormValue<U>
    : T

/**
 * Type of the underlying value of a FormArray.
 *
 * ```ts
 * FormArrayValue<FormArray<FormGroup<MyForm>>>
 * ```
 * Is equivalent to
 * ```ts
 * Array<FormValue<MyForm>>
 * ```
 */
export type FormArrayValue<T> = T extends FormArray<infer U>
    ? Array<FormGroupValue<U>>
    : T
