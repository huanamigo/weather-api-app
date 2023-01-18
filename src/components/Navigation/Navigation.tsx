import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Navigation.module.scss'

const Navigation = () => {
  return (
    <div className={styles.container}>
      <p>Wthr</p>
      <p>Dashboard</p>
      <p>Saved Locations</p>
      <p>Calendar</p>
      <p>Setting</p>
    </div>
  )
}

export default Navigation