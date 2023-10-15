import { kv } from "@vercel/kv"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { revalidatePath } from "next/cache"

export default async function Home() {
  const numEmails = await kv.get("numEmails")
  console.log("numEmails", numEmails)

  const addEmail = async (formData: FormData) => {
    "use server"
    const email = formData.get("email")

    await kv.lpush("email", email)
    await kv.incr("numEmails")
    revalidatePath("/")
  }
  return (
    <div className="grid place-items-center w-full h-full">
      <div className="text-lg text-purple-400 my-4">
        We have {numEmails || 0} emails!
      </div>
      <form
        action={addEmail}
        className="w-[300px] flex flex-col justify-center gap-2"
      >
        <Input placeholder="Join the waitlist"></Input>
        <Button>Submit</Button>
      </form>
    </div>
  )
}
