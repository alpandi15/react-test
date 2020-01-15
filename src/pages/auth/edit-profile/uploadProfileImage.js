import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import CardContainerRow from 'components/CardContainerRow'
import EditIcon from '@material-ui/icons/Edit'
import Avatar from '@material-ui/core/Avatar'

const uploadProfileImage = ({
  classes,
  input,
  ...other
}) => {
  const [fileList, setFile] = useState([])

  const onHandleFile = (e) => {
    const reader = new FileReader()
    const file = e.target.files[0]
    reader.onload = (el) => {
      setFile(el.target.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
  }

  return (
    <div
      style={{
        margin: 'auto',
        position: 'relative'
      }}
    >
      <CardContainerRow
        itemJustifyContent="center"
        itemLeft={(
          <Paper elevation={1}
            style={{
              zIndex: 1,
              cursor: 'pointer',
              position: 'absolute',
              bottom: 3,
              right: 0,
              top: 0,
              borderRadius: '50%',
              background: '#fff',
              height: 35,
              width: 35,
              lineHeight: 20,
              color: '#000'
            }}
            {...input}
            {...other}
          >
            <label htmlFor="addImage">
              <input
                type="file"
                hidden
                id="addImage"
                accept="image/png, image/jpeg, image/jpg"
                onChange={onHandleFile}
              />
              <EditIcon
                style={{
                  position: 'absolute',
                  bottom: 5,
                  right: 5,
                  lineHeight: 20,
                  color: '#000'
                }}
              />
            </label>
          </Paper>
        )}
        itemCenter={(
          fileList && fileList.length
            ? (
              <Avatar
                src={fileList}
                alt="profile"
                className={classes.avatar}
                style={{
                  height: 118,
                  width: 118
                }}
              />
            )
            : (
              <Avatar
                src="https://cdn.pixabay.com/photo/2018/02/27/23/03/autumn-3186876__340.jpg"
                alt="profile"
                className={classes.avatar}
                style={{
                  height: 118,
                  width: 118
                }}
              />
            )
        )}
      />
    </div>
  )
}

export default uploadProfileImage
