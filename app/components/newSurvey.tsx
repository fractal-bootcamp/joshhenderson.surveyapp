import { Form } from "@remix-run/react";
import { useState } from "react";

export const action = () => {
    console.log('doing stuff')
}

export default function NewSurvey() {
    const [formLength, setFormLength] = useState(0);
    const [title, setTitle] = useState("")
    const [qlist, setQlist] = useState([""])

    const addQuestion = () => {
        setFormLength(formLength + 1)
    }


    return (
        <div>
            <Form action="/surveys" method="post">
                <input name="Title" type="text" aria-label="Title!" onChange={(e) => { setTitle(e.target.value) }} />
                <input name="question" type="text" aria-label="Question" />
            </Form>
            <div>
                {[...Array(formLength)].map((x, i) =>
                    <input name="question" type="text" aria-label="Question" />)}
            </div>
            <button onClick={() => { setFormLength(formLength + 1), console.log("something is happening") }}>Add another question</button>
        </div>
    )



}


// const IdealComponent = () => {
//     // state
//     // maybe some control functions or transformations
//     // return ( JSX )
// }