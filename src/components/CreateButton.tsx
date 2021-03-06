/** @format */

import * as _ from 'lodash'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button, ButtonProps } from 'semantic-ui-react'

interface Props {
  readonly createLink: string
}
export default function CreateButton(props: Props & ButtonProps) {
  return (
    <Link to={props.createLink}>
      <Button color="green" {..._.omit(props, 'createLink')}>
        Create
      </Button>
    </Link>
  )
}
