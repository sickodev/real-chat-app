import Button from "@/components/ui/Button";
import { db } from "@/lib/db";

export default async function Home() {
    return (
        <div>
            <Button variant='ghost'>Hello</Button>
        </div>
    );
}
