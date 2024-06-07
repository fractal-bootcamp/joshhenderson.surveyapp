import type { MetaFunction, ActionFunction, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react"
import { getSurveys } from "./surveys";
import { json } from "@"

export const meta: MetaFunction = () => {
  return [
    { title: "test" },
    { description: "testing" }
  ];
};




export default function Index() {
  const
  return (
    <div>
      <Form action="/Index" method="post">
        <input name="title" type="text" />
        <input name="description" type="text" />
      </Form>
    </div>
  )
}

//surveys 
//survey creation form
//survey
//survey results aka answers
