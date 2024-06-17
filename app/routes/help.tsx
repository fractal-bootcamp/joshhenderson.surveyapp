import { Link } from "@remix-run/react"
import NewSurvey from "../components/newSurvey";

export default function Index() {

    return (
        <div>
            <input />
            <Link to="/surveys">
                Surveys
            </Link>
            <NewSurvey />
        </div >
    )
}


