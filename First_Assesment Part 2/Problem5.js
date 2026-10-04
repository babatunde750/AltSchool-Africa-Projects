function validateSchema(obj, schema) {
  const erorrs = []
  for (const i of Object.keys(schema)){
    const type_expected = schema[i];

    if (!(i in obj)) {
      erorrs.push(`Missing key: ${i}`);
    }
    else if (typeof obj[i] !== type_expected) {
      erorrs.push(
        `Invalid type for ${i}: expected ${type_expected}, got ${typeof obj[i]}`
      );
    } 
  }
  return erorrs;
}