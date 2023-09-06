type DataTypes =
  | 'Null'
  | 'Undefined'
  | 'Object'
  | 'Array'
  | 'Number'
  | 'String'
  | 'Function';

export default function getType(value: unknown) {
  return Object.prototype.toString
    .call(value)
    .match(/^\[object\s(\w+)\]$/)?.[1] as DataTypes;
}
