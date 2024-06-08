import { Link } from "@remix-run/react"
import { Form } from "@remix-run/react"
import React from "react"
import onClick
import QuestionButton from "./addQuestion"

export default function newSurvey() {
    function handleNewQuestion() => {
        return <input type="text" id="question" name="question" required></input>
    }
    return
    <ul>
        <Form>
            <input type="text" id="title" name="title" required></input>
            <input type="text" id="question" name="question" required></input>
        </Form>
        <{QuestionButton type=any />
        <Link to="/new">
            add new survey
        </Link>
    </ul>
}