const nextEmoji = () => {
  const emojis = [
    '🎸',
    '😜',
    '👽',
    '🎅',
    '🦃',
    '🎊',
    '🎉',
    '👀',
    '🚀',
    '🙇',
    '⛄',
    '🔥',
    '🙇‍♀️',
    '👼',
    '🧚‍♀️',
    '👑',
    '🧘‍♀️',
    '🎖️',
    '🏆',
    '🎭',
    '💩'
  ]
  return emojis[new Date() % emojis.length]
}

export { nextEmoji }
