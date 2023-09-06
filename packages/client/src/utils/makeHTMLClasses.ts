import getType from './getType.ts';

type ArrayOfStrings = string[];
type ObjectWithBooleanValues = Record<string, boolean>;
type ArrayOfObjects = Array<ObjectWithBooleanValues>;
type MixedArray = Array<string | ObjectWithBooleanValues>;
type Value =
  | ArrayOfStrings
  | ArrayOfObjects
  | ObjectWithBooleanValues
  | MixedArray;

export default function makeHTMLClasses(payload: Value): string | never {
  switch(getType(payload)) {
    case 'Object': {
      const result: ArrayOfStrings = [];

      for (const key in payload) {
        if (Boolean((payload as ObjectWithBooleanValues)[key])) {
          result.push(key);
        }
      }

      return makeHTMLClasses(result);
    }

    case 'Array': {
      const result = [];

      for (const value of (payload as MixedArray)) {
        result.push(
          typeof value === 'string'
            ? value
            : makeHTMLClasses(value)
        );
      }

      return result.flat().join(' ');
    }

    default: {
      throw new Error(`Expected: \n\t- Array of Strings\n\t- Array of Objects\n\t- Mixed Array of Strings and Objects\n\nBut found: ${getType(payload)}`);
    }
  }
}
