"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Toast from "@/components/Toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "// Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "// Please enter a valid email.",
  }),
  message: z.string().min(1, {
    message: "// please enter any message to submit",
  }),
});

const defaultValues: z.infer<typeof formSchema> = {
  name: "",
  email: "",
  message: "",
};

export function ContactForm() {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {

      setIsSubmitting(true);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxwGTLh0eLt65efoPxKqP_hhp191NMAiBSf3YQe88MwIMyaNvgMTo8FIEZIPuyFBthg/exec",
        {
          method: "POST",
          body: JSON.stringify({
            SubmittedAt: new Date().toLocaleString(),
            Name: values.name,
            Email: values.email,
            Message: values.message,
          }),
        }
      );

      form.reset();

      setToast({
        message: "Form submitted successfully!",
        type: "success",
      });

    } catch (error) {

      console.error("Error submitting form:", error);

      setToast({
        message: "Something went wrong!",
        type: "error",
      });

    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 pb-4">

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>_Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your-Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>_Email</FormLabel>
                <FormControl>
                  <Input placeholder="your-email@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>_Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Let's Work Together!"
                    className="resize-y max-h-44"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            className="block ml-auto bg-[#800080]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>

        </form>
      </Form>
    </>
  );
}