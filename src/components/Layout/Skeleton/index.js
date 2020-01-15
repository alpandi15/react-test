import React from 'react'
import PropTypes from 'prop-types'
import SkeletonComponent from '@material-ui/lab/Skeleton'

const Skeleton = ({
  loading,
  children,
  skeleton,
  ...props
}) => {
  return (
    <div>
      {!loading
        ? (
          skeleton || <SkeletonComponent {...props} />
        )
        : (
          <div>
            {children}
          </div>
        )}
    </div>
  )
}

Skeleton.propTypes = {
  loading: PropTypes.oneOfType([
    PropTypes.bool.isRequired,
    PropTypes.string.isRequired
  ]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['rect', 'text', 'circle']),
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.element.isRequired,
  skeleton: PropTypes.element
}

Skeleton.defaultProps = {
  variant: 'text',
  width: '5em',
  height: '2em',
  skeleton: null
}

export default Skeleton
