import client from "~/client"
import type { ActionFunctionArgs, ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { JSXElementConstructor, useState } from "react"
import { Form } from "@remix-run/react";
// import { prisma } from "../db";
import { useLoaderData, useActionData } from "@remix-run/react";
import NewSurvey from "./newSurvey";

// return type of this action 
export type NewSurveyActionData = {
    formError?: string;
    fieldErrors?: {
        Title?: string;
    };
    fields?: {
        Title?: string;
    };
    ok?: boolean;
};

const badRequest = (data: NewSurveyActionData) => {
    return json(data, { status: 400 });
};

export const action: ActionFunction = async ({ request }) => {
    //setting values to fields from request
    const form = await request.formData();
    type fieldType = 'Title';
    const fieldList: fieldType[] = ['Title'];
    const fields = {} as Record<fieldType, string>;

    for (const fieldName of fieldList) {
        const fieldValue = form.get(fieldName) || '';
        fields[fieldName] = fieldValue as string;
    }

    //validation
    let fieldErrors = {} as Record<fieldType, string>;

    if (!fields.Title) {
        fieldErrors.Title = 'Task cannot be empty';
        return badRequest({ fieldErrors, fields });
    }

    //adding task to database
    try {
        await client.survey.create({
            data: {
                Title: fields.Title,
            },
        });
    } catch (err) {
        console.log('Error', err);
        return badRequest({
            formError: err.message,
        });
    }
    return json({ ok: true });
};

export async function loader() {
    return json(await client.survey.findMany());
};




export default function Surveys() {
    const data = useLoaderData<typeof loader>();
    return (
        <div>
            <input value={'Search by Name'} />
            <Link to="/newSurvey">
                add new survey
            </Link>

            <div>HELLO WORLD</div>
            <ul>
                {data.map((survey: any) => (
                    <li key={survey.id}>{survey.Title}</li>
                ))}
            </ul>

        </div >
    )
}
