import { Form, Link } from "@remix-run/react";

export default function newSurvey() {

    function handleClick() {

        return
        <Form>
            <input type="text" id="question" name="question" required></input>
        </Form>
    }

    return (
        <div>
            <Form action="/Index" method="post">
                <input name="title" type="text" />
                <input name="description" type="text" />
            </Form>
            <button onClick={handleClick}>
                add question
            </button>
        </div>
    )
};

