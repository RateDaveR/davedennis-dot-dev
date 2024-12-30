'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm, SubmitHandler } from 'react-hook-form'

type FormValues = {
  email: string;
};

export function NewsletterSignup() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    setIsSubmitted(true)
  }

  return (
    <Card className="border-2 border-primary">
      <CardHeader>
        <h3 className="font-mono text-xl font-bold">Subscribe to My Newsletter</h3>
      </CardHeader>
      <CardContent>
        {isSubmitted ? (
          <p className="font-mono text-sm">Thanks for subscribing!</p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register("email", { 
                  required: "Email is required", 
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
                className="font-mono"
              />
              {errors.email && <p className="mt-1 font-mono text-xs text-red-500">{errors.email.message as string}</p>}
            </div>
            <Button type="submit" className="w-full font-mono">
              Subscribe
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

