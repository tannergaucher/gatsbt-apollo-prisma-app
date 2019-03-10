function userEventNodes(userEvents, allEvents) {
  // get all user event nodeIds
  const nodeIds = []
  userEvents.map(event => nodeIds.push(event.nodeId))
  // map all pageQuery events
  const userEventNodes = []
  allEvents.map(edge => {
    const { id } = edge.node
    // if the nodeId is in allEvents, return the event node
    if (nodeIds.includes(id)) {
      userEventNodes.push(edge)
    }
  })

  return userEventNodes
}

export default userEventNodes
