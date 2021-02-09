/** @format */

import * as _ from 'lodash'
import React, { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card as SemCard, Icon } from 'semantic-ui-react'
import '../App.css'
import { Settings } from '../components'

export default function Card() {
  const [open, setOpen] = useState(false)
  return (
    <SemCard>
      <SemCard.Header textAlign="right">
        <Settings
          id="dummyId2"
          open={open}
          easiness={1}
          quality={1}
          interval={1}
          trigger={<Icon name="setting" onClick={() => setOpen(true)} />}
          onCancel={() => setOpen(false)}
          onSave={_.noop}
        />
      </SemCard.Header>
      <SemCard.Content>
        <span>J'ai beaucoup de trucs a faire</span>
      </SemCard.Content>
    </SemCard>
  )
}
