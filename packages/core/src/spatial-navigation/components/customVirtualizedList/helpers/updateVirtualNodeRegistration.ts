const registerNewNode = <T>({
  currentItems,
  previousItems,
  addVirtualNode,
}: {
  currentItems: Array<T>;
  previousItems: Array<T>;
  addVirtualNode: (index: number) => void;
}) => {
  currentItems.forEach((_, index) => {
    // Currently this is the only way to compare both array and to know which elements to add
    if (index > previousItems.length - 1) {
      addVirtualNode(index);
    }
  });
};

/**
 * This function aims to compare 2 arrays of items : currentItems and previousItems and :
 * - addVirtualNode for every item from currentItems that weren't in previousItems
 * - removeVirtualNode for every item from previousItems that aren't there anymore in currentItems
 * - re-order all the items
 * For now it only does the Step 1.
 */
export const updateVirtualNodeRegistration = <T>({
  currentItems,
  previousItems,
  addVirtualNode,
}: {
  currentItems: Array<T>;
  previousItems: Array<T>;
  addVirtualNode: (index: number) => void;
}) => {
  // Step 1 : addVirtualNode for every item from currentItems that weren't in previousItems
  registerNewNode({ currentItems, previousItems, addVirtualNode });

  // Step 2 : removeVirtualNode for every from previousItems that aren't there anymore in currentItems
  // TODO

  // Step 3 : re-order all the items
  // TODO
};
