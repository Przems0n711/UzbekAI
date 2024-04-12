import { Terminal } from "lucide-react"
import "./Alert.scss"

import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function AlertMain() {
    return (
        <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                Witamy na stronie Ambasady Uzbekistanu!
            </AlertDescription>
        </Alert>
    )
}

export default Alert;