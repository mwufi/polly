import Image from "next/image"
import { kv } from "@vercel/kv"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { revalidatePath } from "next/cache"

const schema = z.object({
  email: z.string(),
})

function formDataToObject(formData) {
  let obj = {}
  for (let [key, value] of formData.entries()) {
    obj[key] = value
  }
  return obj
}

export default async function Home() {
  let views = -1
  let data = {}

  async function setfoo(formData: FormData) {
    "use server"
    const validatedData = schema.parse(formDataToObject(formData))
    console.log("setting formdata", validatedData)

    await kv.set("foo", validatedData)
    revalidatePath('/')
  }

  try {
    data = await kv.get("foo")

    await kv.set("user_1_session", "session_token_value")
    const session = await kv.get("user_1_session")
    console.log("your session", session)

    views = await kv.incr("views")
  } catch (e) {
    console.log(e)
  }

  return (
    <div>
      <div>hello world~ You have {views} views!</div>
      <div>Here is your data:</div>
      <pre>{JSON.stringify(data)}</pre>
      <form action={setfoo}>
        <div>
          <Label>Email</Label>
          <Input name="email"></Input>
        </div>
        <Button type="submit">Submit!</Button>
      </form>
    </div>
  )
}
