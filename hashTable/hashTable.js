import LinkedList from "../linkedList/singleList/LinkedList.js";

// Hash table size directly affects on the number of collisions.
// The bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions
// are being handled.

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    // Create hash table of certain size and fill each bucket with empty linked list.
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    // Just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  // Converts key string to hash number
  // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
  // where charCodeAt(i) is the i-th character code of the key, n is the length of the key and
  // PRIME is just any prime number like 31.
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );

    return hash % this.buckets.length;
  }

  set(key, value) {
    // Create a hash number for the key
    const keyHash = this.hash(key);
    // Store the new key in the keys array
    this.keys[key] = keyHash;
    // Associate/find the keyHash with a certain bucket. No need to check for a duplicate
    // because if it already exists, the new node will be added under the same keyHash
    const bucketLinkedList = this.buckets[keyHash];
    // Find the pre-existing node on the linked list of this particular bucket using the key
    // We know that the node would exists under this particular bucket if it does exist because
    // the hashing function would produce the same hash value given a key every time
    // The node itself uses an unhashed key because it doesn't have to be an integer or unique.
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      // Insert a new node using the node's constructor
      bucketLinkedList.append({ key, value });
    } else {
      // Update value of existing node
      node.value.value = value;
    }
  }

  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  get(key) {
    const keyHash = hash(key);
    const bucketLinkedList = this.buckets[keyHash];

    let node;
    if (bucketLinkedList !== null) {
      node = bucketLinkedList.find({
        callback: (nodeValue = nodeValue.key === key),
      });

      return node ? node.value.value : undefined;
    } else {
      return undefined;
    }
  }

  has(key) {
    return Object.hasOwnProperty.call(this.key, key);
  }
}
