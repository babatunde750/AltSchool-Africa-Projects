function diffObjects(oldObj, newObj) {
  const added = {};
  const removed = {};
  const changed = {};
  for(const i in Object.keys(newObj)){
    if (!i in newObj) {
      added[i] = newObj[i];
    }
    else if (oldObj[i] !== newObj[i]) {
      changed[i] = {
        old: oldObj[i],
        new: newObj[i]
      };
    }
  }
  for(const i in Object.keys(oldObj)){
    if (!i in newObj) {
      removed[i] = oldObj[i];
    }
  }
  return {added, removed, changed};

}
