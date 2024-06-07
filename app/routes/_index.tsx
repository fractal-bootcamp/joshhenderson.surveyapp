import type { MetaFunction, ActionFunction, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react"
import Surveys from "./surveys";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "test" },
    { description: "testing" }
  ];
};




export default function Index() {

  return (
    <div  >
      <Link to="/new">
        add new survey
      </Link>
      <Link to="/surveys">
        view surveys
      </Link>
    </div >
  )
}

//surveys 
//survey creation form
//survey
//survey results aka answers
