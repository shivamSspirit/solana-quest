"use client"
import { Button } from "@components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@components/ui/form"
import { Input } from "@components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover"
import { zodResolver } from "@hookform/resolvers/zod"
import { Rocket } from "@lib/icons"
import { useForm } from "react-hook-form"
import { z } from "zod"

const challengeSchema = z.object({
  deployedURL: z.string().url("Must be a valid URL"),
  solscanURL: z.string().url("Must be a valid URL")
})

interface ChallegeInput {
  name: "deployedURL" | "solscanURL",
  label: string,
  placeholder: string,
}

const challengeInputs: ChallegeInput[] = [
  {
    name: "deployedURL",
    label: "Deployed URL",
    placeholder: "https://your-site.vercel.app/"
  },
  {
    name: "solscanURL",
    label: "Solscan URL",
    placeholder: "https://sepolia.solscan.io/address/**YourContractAdc..."
  }
]

const SubmitChallenge: React.FC<{serial: number, title: string}> = ({serial, title}) => {

  const form = useForm<z.infer<typeof challengeSchema>>({
    resolver: zodResolver(challengeSchema),
  })
  function onSubmit(values: z.infer<typeof challengeSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="gap-2" >
          <Rocket />
          Submit Challenge
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <h3 className="text-xl mb-4 font-semibold">Submit Challenge</h3>
        <span>{`Challenge ${serial}: ${title}`}</span>
        <Form {...form} >
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-2" >
            {challengeInputs.map(s => (
              <FormField 
                key={s.name}
                control={form.control}
                name={s.name}
                render={({field}) => (
                  <FormItem>
                    <FormLabel>{s.label}</FormLabel>
                    <FormControl>
                      <Input placeholder={s.placeholder}
                        {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button className="font-medium w-full gap-2" outerClass="w-full" >
              <Rocket /> Submit
            </Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  )
}

export default SubmitChallenge
