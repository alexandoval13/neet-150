/**
 * Build a comment tree from flat array ({id, parentId}), then print:
 * DFS-style (nested/threaded format)
 * Level-style (flat with indent)
 */

/**
 *
 * @param {{ id: string, parentId: string}[]} comments
 */
class Node {
  constructor(id) {
    this.id = id;
    this.children = [];
  }
}

function commentsWithParentIds(comments) {
  let nodes = new Map();
  let roots = [];

  // iterate through comments
  for (let comment of comments) {
    const { id, parentId } = comment;

    const node = nodes.get(id) ?? new Node(id);
    nodes.set(id, node);

    if (parentId) {
      // get parent or create and add to nodes if doesnt exist
      let parent = nodes.get(parentId) ?? new Node(parentId);

      // add the child to the parent
      parent.children.push(node);
      nodes.set(parentId, parent);
    } else {
      roots.push(node);
    }
  }

  return roots;
}

const printCommentTree = (tree) => {};

const comments = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: null },
];

const tree = commentsWithParentIds(comments);
console.log(JSON.stringify(tree, null, 2));
