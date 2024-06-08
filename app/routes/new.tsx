import { Form, Link } from "@remix-run/react";

export default function () {
    return (
        <Form action="/Index" method="post">
            <input name="title" type="text" />
            <input name="description" type="text" />
        </Form>
    )
};

