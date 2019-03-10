function notUserEventNodes(userEvents, allEvents) {
  const nodeIds = []

  userEvents.map(event => nodeIds.push(event.nodeId))

  const notUserEventNodes = []

  allEvents.map(edge => {
    const { id } = edge.node

    if (nodeIds.includes(id)) {
      return
    } else {
      notUserEventNodes.push(edge)
    }
  })

  return notUserEventNodes
}

export default notUserEventNodes
