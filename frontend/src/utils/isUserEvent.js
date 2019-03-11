function isUserEvent(userEvents, allEvents) {
  const nodeIds = []

  userEvents.map(event => nodeIds.push(event.nodeId))

  allEvents.map(edge => {
    const { id } = edge.node

    return nodeIds.includes(id)
  })
}

export default isUserEvent
