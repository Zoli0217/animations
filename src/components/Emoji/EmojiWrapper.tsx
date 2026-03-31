import React from 'react'
import Emoji from './Emoji'
import styles from './EmojiWrapper.module.css'

const EmojiWrapper = () => {
  return (
    <div className={styles.emojiWrapper}>
        <Emoji emoji="❤️" text='love'/>
        <Emoji emoji="🧑🏿" text='gipsy'/>
        <Emoji emoji="👍" text='okay'/>
        <Emoji emoji="🍊" text='fidesz'/>
        <Emoji emoji="😛" text='freaky'/>
    </div>
  )
}

export default EmojiWrapper