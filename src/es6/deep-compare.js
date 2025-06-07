function isPrimitive(val) {
    return (
      val === null ||
      typeof val !== 'object' && typeof val !== 'function'
    );
  }

function deepEqual(a, b) {
    if (a === b) return true;
  
    if (isPrimitive(a) !== isPrimitive(b)) {
      return false;
    }
  
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key)) return false;
      if (!deepEqual(a[key], b[key])) return false;
    }
  
    return true;
  }
  