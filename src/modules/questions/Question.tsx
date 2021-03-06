/** @format */

import React, { MouseEventHandler, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Segment } from 'semantic-ui-react'
import 'src/App.css'
import { Settings } from 'src/components'
import { styles } from 'src/styles'
import { SubmittableQuestionForm } from '.'
import { Questions } from './questions.types'

/**
 * Displays the card (question) content or edit form when user selects edit. User can
 * also delete or update settings of a card (question) in this component
 */
export default function Question(props: Questions.Question) {
  const [editing, setEditing] = useState(false)
  return (
    <Segment className="justify-space-between align-center">
      {editing ? (
        <SubmittableQuestionForm
          {...props}
          onSubmit={(data) => console.log('question form data', data)}
          onCancel={() => setEditing(false)}
        />
      ) : (
        <QuestionContent
          content={props.content}
          onEdit={() => setEditing(true)}
          onDelete={() => console.log('on delete')}
          onSubmitSettings={() => console.log('submitSettings')}
        />
      )}
    </Segment>
  )
}

interface QuestionContentProps {
  content: Questions.Question['content']
  onEdit: MouseEventHandler
  onDelete: MouseEventHandler
  // TODO add type
  onSubmitSettings: any
}
/**
 * Displays the content of the question and the delete, edit and settings buttons
 * from which user can delete, open edit form, or open settings menu
 */
function QuestionContent(props: QuestionContentProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <span className="ellipsis">{props.content}</span>
      <span>
        <Button
          style={styles.bgWhite}
          icon={<Icon name="pencil" />}
          onClick={props.onEdit}
        />
        <Button
          style={styles.bgWhite}
          icon={<Icon name="x" color="red" />}
          onClick={props.onDelete}
        />
        <Settings
          id="dummyId2"
          deckId="dummyDeck1Id"
          decks={[]}
          open={open}
          easiness={1}
          quality={1}
          interval={1}
          trigger={
            <Button
              style={styles.bgWhite}
              icon={<Icon name="setting" />}
              onClick={() => setOpen(true)}
            />
          }
          onCancel={() => setOpen(false)}
          onSave={props.onSubmitSettings}
        />
      </span>
    </>
  )
}
