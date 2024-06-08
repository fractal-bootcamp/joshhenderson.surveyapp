import { Form } from "@remix-run/react";

export default function QuestionButton() {
    function handleClick() {
        return
        <Form>
            <input type="text" id="question" name="question" required></input>
        </Form>
    }

    return (
        <button onClick={handleClick}>
            add question
        </button>
    );
}