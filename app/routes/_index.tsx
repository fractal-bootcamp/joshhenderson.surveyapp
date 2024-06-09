import { Link } from "@remix-run/react"
import { useState } from "react"
import client from "~/client"
import type { ActionFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
// import { prisma } from "../db";
import { useLoaderData, useActionData } from "@remix-run/react";

// export async function action({
//   request,
// }: ActionFunctionArgs) {
//   const body = await request.formData();
//   // const survey = await fakeCreateSurvey({
//   //   title: body.get("title"),
//   // });
//   return redirect(`/surveys/${Surveys.id}`);
// }

export async function loader() {
  return json(await client.survey.findMany());
}




export default function Surveys() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <input value={'Search by Name'} />
      <Link to="/new">
        add new survey
      </Link>
      <div>HELLO WORLD</div>
      <ul>
        {data.map((survey: any) => (
          <li key={survey.id}>{survey.name}</li>
        ))}
      </ul>

    </div >
  )
}


